// script.js - renders premium cards from people[] and wires UI interactions

const people = [
  {
    fullName: "Jhon Sharma",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=900&auto=format&fit=crop&q=60",
    profession: "Software Developer",
    description: "Specializes in full-stack web development and building scalable cloud apps.",
    tags: ["developer", "javascript", "web", "tech"],
    featured: true
  },
  {
    fullName: "Riyansh",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=60",
    profession: "Graphic Designer",
    description: "Creates modern, minimalistic branding and digital illustrations.",
    tags: ["designer", "branding", "illustration", "ui"]
  },
  {
    fullName: "Kabir Singh",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=900&auto=format&fit=crop&q=60",
    profession: "Data Analyst",
    description: "Works with big data tools and transforms raw data into clear insights.",
    tags: ["data", "analytics", "python", "insights"]
  },
  {
    fullName: "Meer Haadi",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&auto=format&fit=crop&q=60",
    profession: "Content Writer",
    description: "Writes SEO-optimized content and engaging brand stories.",
    tags: ["writer", "seo", "content", "blogs"]
  },
  {
    fullName: "Arnab Jadega",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=900&auto=format&fit=crop&q=60",
    profession: "Fitness Trainer",
    description: "Helps clients achieve strength and conditioning goals.",
    tags: ["fitness", "trainer", "health", "workout"]
  },
  {
    fullName: "Sanjay Kapoor",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=900&auto=format&fit=crop&q=60",
    profession: "Digital Marketer",
    description: "Runs high-ROI ad campaigns and manages social media strategies.",
    tags: ["marketing", "ads", "social-media", "strategy"]
  },
  {
    fullName: "Divyanshu Sharma",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=900&auto=format&fit=crop&q=60",
    profession: "Photographer",
    description: "Specializes in portrait and event photography with a cinematic style.",
    tags: ["photography", "camera", "editing", "events"]
  },
  {
    fullName: "Niharika Sharma",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=900&auto=format&fit=crop&q=60",
    profession: "UI/UX Designer",
    description: "Designs intuitive interfaces focusing on user behaviour and accessibility.",
    tags: ["uiux", "design", "figma", "wireframes"]
  },
  {
    fullName: "James Verma",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=900&auto=format&fit=crop&q=60",
    profession: "Chef",
    description: "Creates fusion dishes combining traditional and modern techniques.",
    tags: ["chef", "food", "cooking", "recipes"]
  },
  {
    fullName: "Ira Khan",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60",
    profession: "Psychologist",
    description: "Counsels individuals on stress, mindset development, and emotional health.",
    tags: ["psychology", "mental-health", "counseling", "mindset"]
  }
];

const grid = document.getElementById('grid');
const toast = document.getElementById('toast');
const search = document.getElementById('search');
const filterRole = document.getElementById('filterRole');

// helper: create tag node
function createTag(label, primary=false){
  const span = document.createElement('span');
  span.className = 'tag';
  if (primary) span.setAttribute('data-primary','true');
  span.textContent = label;
  return span;
}

// build card HTML (returns element)
function buildCard(person, idx){
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('data-index', idx);
  card.setAttribute('role','article');

  // ribbon if featured
  if (person.featured) {
    const ribbon = document.createElement('div');
    ribbon.className = 'ribbon';
    ribbon.textContent = 'FEATURED';
    card.appendChild(ribbon);
  }

  // header
  const header = document.createElement('div');
  header.className = 'header-row';
  header.innerHTML = `
    <div class="avatar"><img loading="lazy" alt="${person.fullName} profile" src="${person.image}"></div>
    <div class="title">
      <h3>${person.fullName}</h3>
      <div class="role">${person.profession}</div>
    </div>
  `;
  card.appendChild(header);

  // description
  const desc = document.createElement('div');
  desc.className = 'desc';
  desc.textContent = person.description;
  card.appendChild(desc);

  // tags
  const tagsRow = document.createElement('div');
  tagsRow.className = 'tags';
  person.tags.slice(0,5).forEach((t,i) => {
    // mark first tag as primary to visually pop
    tagsRow.appendChild(createTag(t, i===0));
  });
  card.appendChild(tagsRow);

  // divider
  const div = document.createElement('div');
  div.className = 'divider';
  card.appendChild(div);

  // actions
  const actions = document.createElement('div');
  actions.className = 'actions';
  actions.innerHTML = `
    <button class="btn connect" data-state="connect" aria-pressed="false" title="Connect with ${person.fullName}">
      <i class="ri-user-add-line"></i>
      <span class="text">Connect</span>
    </button>
    <button class="btn message" data-state="message" title="Message ${person.fullName}">
      <i class="ri-chat-3-line"></i>
      <span class="text">Message</span>
    </button>
  `;
  card.appendChild(actions);

  // footer meta
  const meta = document.createElement('div');
  meta.className = 'meta-row';
  meta.innerHTML = `
    <div class="muted">Skills: ${person.tags.slice(0,3).join(', ')}</div>
    <div class="muted">ID: #${String(idx+1).padStart(3,'0')}</div>
  `;
  card.appendChild(meta);

  return card;
}

// render all
function render(data){
  grid.innerHTML = '';
  data.forEach((p,i) => {
    const c = buildCard(p,i);
    grid.appendChild(c);
  });
}

// initial render
render(people);

// delegated click handling (connect + message)
grid.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  const card = btn.closest('.card');
  const idx = Number(card.dataset.index);
  const person = people[idx];

  if (btn.classList.contains('connect')) {
    // toggle connect state
    const connected = btn.classList.toggle('connected');
    if (connected) {
      btn.setAttribute('aria-pressed','true');
      btn.innerHTML = `<i class="ri-user-follow-line"></i><span class="text">Connected</span>`;
      showToast(`Connected with ${person.fullName}`);
    } else {
      btn.setAttribute('aria-pressed','false');
      btn.classList.remove('connected');
      btn.innerHTML = `<i class="ri-user-add-line"></i><span class="text">Connect</span>`;
      showToast(`Removed connection with ${person.fullName}`);
    }
  } else if (btn.classList.contains('message')) {
    // simple message action — you can change to open modal
    showToast(`Open chat with ${person.fullName}`);
    // placeholder: simulate opening chat
  }
});

// search & filter handlers (live)
function filterAndSearch(){
  const q = (search.value || '').trim().toLowerCase();
  const roleFilter = (filterRole.value || '').trim().toLowerCase();

  const filtered = people.filter(p => {
    const matchQ = !q || (p.fullName + ' ' + p.profession + ' ' + p.tags.join(' ')).toLowerCase().includes(q);
    const matchRole = !roleFilter || p.profession.toLowerCase().includes(roleFilter);
    return matchQ && matchRole;
  });

  render(filtered);
}

search.addEventListener('input', filterAndSearch);
filterRole.addEventListener('change', filterAndSearch);

// small toast helper
let toastTimer = null;
function showToast(text, ms=1600){
  clearTimeout(toastTimer);
  toast.textContent = text;
  toast.classList.add('show');
  toastTimer = setTimeout(()=>toast.classList.remove('show'), ms);
}
