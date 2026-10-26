(() => {
  const button = document.getElementById('motion-toggle');
  const scene = document.querySelector('.sea-decoration');
  if (!button || !scene) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = false;
  const sync = () => {
    scene.classList.toggle('motion-paused', paused || reduced.matches);
    button.hidden = reduced.matches;
    button.setAttribute('aria-pressed', String(paused));
    button.textContent = paused ? '波の動きを再生する ▷' : '波の動きを止める Ⅱ';
  };
  button.addEventListener('click', () => { paused = !paused; sync(); });
  reduced.addEventListener('change', sync);
  let visible = true;
  const visibility = () => scene.classList.toggle('water-offscreen', !visible || document.hidden);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; visibility(); }).observe(scene);
  }
  document.addEventListener('visibilitychange', visibility);
  sync();
})();
