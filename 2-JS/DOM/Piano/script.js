// Improved script.js with GREEN BLINK effect
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const sampleMap = {};
const notesOrder = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const notes = ["C", "D", "E", "F", "G", "A", "B"];
const sharpNotes = ["C#", "D#", "F#", "G#", "A#"];
const whiteKeysChars = "asdfghjkl;vbnm";
const blackKeysChars = "qwertyuiop";
const pianoEl = document.getElementById("piano");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const octaveDisplay = document.getElementById("octaveDisplay");
const loadProgressBar = document.getElementById("loadProgressBar");
const loadText = document.getElementById("loadText");

let groupNumber = 3;
let mappedTone = {};
let keyDownState = {};
let isPointerDown = false;
let lastPlayedNote = null;

// master gain to avoid clipping
const masterGain = audioCtx.createGain();
masterGain.gain.value = 0.25;
masterGain.connect(audioCtx.destination);

// Utility: resume audio context on first user gesture
function ensureAudioContext() {
  if (audioCtx.state === "suspended") {
    audioCtx.resume().catch((e) => console.warn("AudioCtx resume failed:", e));
  }
}

// render group of keys (two halves)
function renderGroup(baseOctave, halfFlag) {
  let localWhite = "";
  let localBlack = "";
  if (halfFlag === 1) {
    localWhite = whiteKeysChars.slice(0, Math.ceil(whiteKeysChars.length / 2));
    localBlack = blackKeysChars.slice(0, Math.ceil(blackKeysChars.length / 2));
  } else {
    localWhite = whiteKeysChars.slice(Math.ceil(whiteKeysChars.length / 2));
    localBlack = blackKeysChars.slice(Math.ceil(blackKeysChars.length / 2));
  }

  let keys = "";
  let bindex = 0;

  notes.forEach((n, i) => {
    const noteName = `${n}${baseOctave}`;
    const whiteChar = localWhite[i] || "";
    keys += `<div class="white-key" role="button" tabindex="0" data-note="${noteName}" data-key="${whiteChar}">
               <div class="details">
                 <p>${noteName}</p>
                 <p class="small">${whiteChar}</p>
               </div>`;

    // add black key if required
    if (sharpNotes.includes(`${n}#`)) {
      const blackNote = `${n}#${baseOctave}`;
      const blackChar = localBlack[bindex] || "";
      keys += `<div class="black-key" role="button" tabindex="-1" data-note="${blackNote}" data-key="${blackChar}">
                 <p>${n}#${baseOctave}</p><p class="small">${blackChar}</p>
               </div>`;
      bindex++;
    }
    keys += `</div>`;
  });

  return keys;
}

function visibleGroup(n) {
  pianoEl.innerHTML = renderGroup(n, 1) + renderGroup(n + 1, 2);
  octaveDisplay.textContent = n;
  // rebuild mapping
  mappedTone = {};
  pianoEl.querySelectorAll("[data-key]").forEach((el) => {
    const ch = el.dataset.key;
    if (ch) mappedTone[ch] = el.dataset.note;
  });
}

// sample loader with progress
async function loadSample(note) {
  const safe = note.replace("#", "%23");
  try {
    const res = await fetch(`piano_audio/${safe}.wav`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    sampleMap[note] = await audioCtx.decodeAudioData(arrayBuffer);
  } catch (e) {
    console.warn("Failed to load", note, e);
    // don't throw further — allow partial experience
  }
}

async function loadAllSamples() {
  const tasks = [];
  const allNotes = [];
  for (let oct = 1; oct <= 7; oct++) {
    for (let n of notesOrder) {
      const full = `${n}${oct}`;
      allNotes.push(full);
    }
  }

  // load in small batches to avoid locking UI
  for (let i = 0; i < allNotes.length; i++) {
    tasks.push(loadSample(allNotes[i]));
    if ((i + 1) % 16 === 0) {
      await Promise.all(tasks.splice(0)); // wait for batch
      const pct = Math.round(((i + 1) / allNotes.length) * 100);
      loadProgressBar.style.width = `${pct}%`;
      loadText.textContent = `Loading samples... ${pct}%`;
    }
  }
  // finalize any remaining tasks
  await Promise.all(tasks);
  loadProgressBar.style.width = `100%`;
  loadText.textContent = `Samples loaded`;
  console.log("samples finished");
}

// play note: uses sampleMap and per-note gain/filter to avoid clicking
function playNote(note) {
  ensureAudioContext();
  const buffer = sampleMap[note];
  if (!buffer) {
    console.warn("No sample for", note);
    return;
  }
  const src = audioCtx.createBufferSource();
  src.buffer = buffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 30;

  const gain = audioCtx.createGain();
  const now = audioCtx.currentTime;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(1, now + 0.003);
  gain.gain.setValueAtTime(1, now + buffer.duration - 0.01);
  gain.gain.linearRampToValueAtTime(0, now + buffer.duration);

  src.connect(gain);
  gain.connect(filter);
  filter.connect(masterGain);

  src.start(now);
}

// Visual helper: add/remove active class
function setKeyActiveByNote(note, isActive) {
  const el = pianoEl.querySelector(`[data-note="${note}"]`);
  if (!el) return;
  if (isActive) el.classList.add("active");
  else el.classList.remove("active");
}

// --- BLINK helper ---
// Restart blink animation for the element associated with a note
function triggerBlinkByNote(note) {
  const el = pianoEl.querySelector(`[data-note="${note}"]`);
  if (!el) return;
  el.classList.remove("blink");
  // force reflow to restart animation
  // eslint-disable-next-line no-unused-expressions
  el.offsetWidth;
  el.classList.add("blink");
}

// Single keydown handler (prevents repeated events)
window.addEventListener("keydown", (ev) => {
  // handle arrow navigation
  if (ev.key === "ArrowRight") {
    if (groupNumber < 4) groupNumber++;
    visibleGroup(groupNumber);
    return;
  } else if (ev.key === "ArrowLeft") {
    if (groupNumber > 1) groupNumber--;
    visibleGroup(groupNumber);
    return;
  }

  if (keyDownState[ev.key]) return; // held down check
  keyDownState[ev.key] = true;

  const mapped = mappedTone[ev.key];
  if (mapped) {
    ensureAudioContext();
    setKeyActiveByNote(mapped, true);
    triggerBlinkByNote(mapped);
    playNote(mapped);
  }
});

window.addEventListener("keyup", (ev) => {
  keyDownState[ev.key] = false;
  const mapped = mappedTone[ev.key];
  if (mapped) setKeyActiveByNote(mapped, false);
});

// Pointer / Mouse handlers for piano (supports slides)
pianoEl.addEventListener("pointerdown", (e) => {
  ensureAudioContext();
  isPointerDown = true;
  // capture pointer so pointermove/up keep working outside the key
  try {
    pianoEl.setPointerCapture(e.pointerId);
  } catch (err) {
    /* ignore */
  }
  const el = e.target.closest("[data-note]");
  if (!el) return;
  const note = el.dataset.note;
  lastPlayedNote = note;
  setKeyActiveByNote(note, true);
  triggerBlinkByNote(note);
  playNote(note);
});
pianoEl.addEventListener("pointerup", (e) => {
  isPointerDown = false;
  const el = e.target.closest("[data-note]");
  if (!el) return;
  const note = el.dataset.note;
  setKeyActiveByNote(note, false);
  lastPlayedNote = null;
});
pianoEl.addEventListener("pointermove", (e) => {
  if (!isPointerDown) return;
  const el = e.target.closest("[data-note]");
  if (!el) return;
  const note = el.dataset.note;
  if (note !== lastPlayedNote) {
    if (lastPlayedNote) setKeyActiveByNote(lastPlayedNote, false);
    lastPlayedNote = note;
    setKeyActiveByNote(note, true);
    triggerBlinkByNote(note);
    playNote(note);
  }
});

// Replace previous animationend handler with this:
pianoEl.addEventListener("animationend", (ev) => {
  // climb to nearest key element (protects against animation fired on inner <p> etc.)
  const keyEl = ev.target.closest(".white-key, .black-key");
  if (!keyEl) return;
  // always remove blink when animation ends on that key
  if (keyEl.classList.contains("blink")) keyEl.classList.remove("blink");
});

// nav buttons
function navStep(dir) {
  if (dir === "right" && groupNumber < 4) groupNumber++;
  if (dir === "left" && groupNumber > 1) groupNumber--;
  visibleGroup(groupNumber);
}
rightBtn.addEventListener("click", () => {
  navStep("right");
});
leftBtn.addEventListener("click", () => {
  navStep("left");
});

// init
visibleGroup(groupNumber);
loadAllSamples().catch((e) => {
  console.warn("Error loading samples:", e);
  loadText.textContent = "Loading samples (some failed)";
});
