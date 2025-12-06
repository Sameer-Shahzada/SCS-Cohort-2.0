// spotlight script: uses rAF for smooth updates and supports mouse + touch.
// updates CSS variables --x and --y on <html> so both effect and cards read same coordinates.

(() => {
  const root = document.documentElement;
  const effect = document.getElementById('effect');

  // fallback spot size depending on viewport (update CSS variable)
  const setSpotSize = () => {
    const smaller = Math.min(window.innerWidth, window.innerHeight);
    // spot grows on large screens
    const size = Math.round(Math.max(140, Math.min(360, smaller * 0.28)));
    root.style.setProperty('--spot-size', `${size}px`);
  };
  setSpotSize();
  window.addEventListener('resize', setSpotSize);

  // state for rAF throttling
  let rafId = null;
  const last = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  const updateVars = (x, y) => {
    // update both html root so ::before on cards can use same values
    root.style.setProperty('--x', `${x}px`);
    root.style.setProperty('--y', `${y}px`);
  };

  // central handler that will be scheduled by rAF
  const scheduleUpdate = (clientX, clientY) => {
    last.x = clientX;
    last.y = clientY;
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      updateVars(last.x, last.y);
      rafId = null;
    });
  };

  // mousemove
  window.addEventListener('mousemove', (e) => {
    scheduleUpdate(e.clientX, e.clientY);
  }, { passive: true });

  // touch support: use first touch point
  window.addEventListener('touchmove', (e) => {
    const t = e.touches && e.touches[0];
    if (!t) return;
    scheduleUpdate(t.clientX, t.clientY);
  }, { passive: true });

  // optional: if user stops moving, we slowly shrink the spotlight and slightly center it
  let idleTimer = null;
  const startIdleTimer = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      // gently move spotlight to center
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      // animate a few frames towards center
      let steps = 10;
      const step = () => {
        last.x += (cx - last.x) * 0.18;
        last.y += (cy - last.y) * 0.18;
        updateVars(last.x, last.y);
        if (--steps > 0) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 2100);
  };

  // refresh idle timer on input
  ['mousemove', 'touchmove', 'touchstart'].forEach(ev =>
    window.addEventListener(ev, startIdleTimer, { passive: true })
  );
  startIdleTimer();

  // initialize position at center
  updateVars(last.x, last.y);
})();
