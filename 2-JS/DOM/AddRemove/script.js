// script.js - improved: event delegation + aria + search filter
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('friendList');
  const search = document.getElementById('search');

  // Delegated click handler for add/remove buttons
  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.action');
    if (!btn) return;

    // toggle state
    const state = btn.getAttribute('data-state') || 'add';
    if (state === 'add') {
      // switched to remove
      btn.setAttribute('data-state', 'remove');
      btn.setAttribute('aria-pressed', 'true');
      btn.querySelector('.icon').className = 'ri-user-follow-line icon'; // change icon
      btn.querySelector('.label').textContent = 'Remove Friend';
      // subtle success feedback (aria)
      btn.dispatchEvent(new CustomEvent('friend:added', { bubbles: true }));
    } else {
      // switched to add
      btn.setAttribute('data-state', 'add');
      btn.setAttribute('aria-pressed', 'false');
      btn.querySelector('.icon').className = 'ri-user-add-line icon';
      btn.querySelector('.label').textContent = 'Add Friend';
      btn.dispatchEvent(new CustomEvent('friend:removed', { bubbles: true }));
    }
  });

  // Optional: keyboard activation of buttons is automatic for <button> elements,
  // but we'll also allow Enter/Space to toggle when focused (native already handles this).

  // Search filter (live)
  if (search) {
    search.addEventListener('input', (e) => {
      const q = (e.target.value || '').trim().toLowerCase();
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const name = card.querySelector('.name').textContent.toLowerCase();
        const show = !q || name.includes(q);
        card.style.display = show ? '' : 'none';
      });
    });
  }

  // Example: listen for the custom events if you want to react elsewhere
  list.addEventListener('friend:added', (e) => {
    // you could show a toast, update API, etc.
    // console.log('Friend added', e.target.closest('.card')?.querySelector('.name')?.textContent);
  });
  list.addEventListener('friend:removed', (e) => {
    // console.log('Friend removed', e.target.closest('.card')?.querySelector('.name')?.textContent);
  });
});
