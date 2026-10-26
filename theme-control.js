// 初回描画前に保存済みテーマを適用。保存できない環境でも切り替えは利用可能。
(() => {
  const root = document.documentElement;
  let selected = 'light';
  try { if (localStorage.getItem('aquart-theme') === 'dark') selected = 'dark'; } catch {}
  root.dataset.theme = selected;
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    const meta = document.querySelector('meta[name="theme-color"]');
    const sync = () => {
      const dark = root.dataset.theme === 'dark';
      button.setAttribute('aria-checked', String(dark));
      button.querySelector('.theme-knob').textContent = dark ? '☾' : '☀';
      if (meta) meta.content = dark ? '#0a1530' : '#edfaff';
    };
    let timer;
    button.hidden = false; sync();
    button.addEventListener('click', () => {
      root.classList.add('theme-changing');
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('aquart-theme', root.dataset.theme); } catch {}
      sync(); clearTimeout(timer);
      timer = setTimeout(() => root.classList.remove('theme-changing'), 500);
    });
  });
})();
