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
    let switching = false;
    // transitionend が発生しない環境・バックグラウンドでも必ず完了させる。
    const waitForTransition = (element, property, duration) => new Promise(resolve => {
      const finish = () => { clearTimeout(timer); element.removeEventListener('transitionend', onEnd); resolve(); };
      const onEnd = event => { if (event.target === element && event.propertyName === property) finish(); };
      const timer = setTimeout(finish, duration + 180);
      element.addEventListener('transitionend', onEnd);
    });
    button.hidden = false; sync();
    button.addEventListener('click', async () => {
      if (switching) return;
      switching = true;
      button.setAttribute('aria-disabled', 'true');
      button.setAttribute('aria-busy', 'true');
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const water = document.createElement('div');
      water.className = `theme-water${reduced ? ' theme-water-still' : ''}`;
      water.dataset.destination = next;
      water.setAttribute('aria-hidden', 'true');
      water.innerHTML = '<svg viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true"><path d="M0 24 C180 0 360 0 540 24 S900 48 1080 24 S1320 0 1440 24 V48 H0 Z"/></svg>';
      document.body.append(water);
      const applyTheme = () => {
        root.dataset.theme = next;
        try { localStorage.setItem('aquart-theme', next); } catch {}
        sync();
      };
      try {
        // 初期位置を確定してから、薄い水色の幕を下から満たす。
        water.getBoundingClientRect();
        const filling = waitForTransition(water, reduced ? 'opacity' : 'transform', reduced ? 450 : 1400);
        water.classList.add('is-filled');
        await filling;
        // 幕が画面全体を覆った状態で配色を変更し、ゆっくり透かしてなじませる。
        root.classList.add('theme-changing');
        applyTheme();
        const settling = waitForTransition(water, 'opacity', 1200);
        water.classList.add('is-settling');
        await settling;
      } finally {
        applyTheme();
        water.remove();
        root.classList.remove('theme-changing');
        button.removeAttribute('aria-disabled');
        button.removeAttribute('aria-busy');
        switching = false;
      }
    });
  });
})();
