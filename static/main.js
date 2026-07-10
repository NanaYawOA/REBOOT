// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section').forEach((s) => io.observe(s));

// Copy BibTeX
document.querySelectorAll('.copy').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const target = document.querySelector(btn.dataset.target);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.innerText.trim());
      const original = btn.textContent;
      btn.textContent = 'Copied';
      btn.classList.add('done');
      setTimeout(() => { btn.textContent = original; btn.classList.remove('done'); }, 1800);
    } catch (_) {
      // Fallback: select the text so the user can copy manually
      const range = document.createRange();
      range.selectNodeContents(target);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  });
});
