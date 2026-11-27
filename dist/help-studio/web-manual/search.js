// Client-side offline/static full-text search for RaggieSoft Help Studio web portals
(function () {
  let docs = null;
  const input = document.getElementById('rsh-web-search');
  const results = document.getElementById('rsh-web-results');
  if (!input || !results) return;
  input.addEventListener('input', async function () {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }
    if (!docs) {
      const res = await fetch('search-index.json');
      docs = await res.json();
    }
    const hits = docs.filter(d => d.title.toLowerCase().includes(q) || d.text.includes(q)).slice(0, 8);
    results.innerHTML = hits.length
      ? hits.map(h => `<a href="${h.href}"><strong>${h.title}</strong><br><small>${h.category}</small></a>`).join('')
      : '<p style="font-size:0.85rem;">No matching topics found.</p>';
  });
})();
