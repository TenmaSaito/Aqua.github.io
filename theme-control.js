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
    // DOMを複製せず、波が通った文字の描画色だけを切り替える。
    const followWaveText = (water, next) => {
      const keys = ['ink', 'muted', 'green', 'accent'];
      const probe = document.createElement('span');
      probe.className = 'theme-palette'; probe.hidden = true;
      document.body.append(probe);
      const palette = theme => {
        probe.dataset.theme = theme;
        return Object.fromEntries(keys.map(key => {
          probe.style.color = `var(--${key})`;
          return [key, getComputedStyle(probe).color];
        }));
      };
      const previous = palette(root.dataset.theme);
      const target = palette(next);
      probe.remove();
      const highlights = Object.fromEntries(keys.map(key => {
        root.style.setProperty(`--theme-wave-${key}`, target[key]);
        const highlight = new Highlight();
        CSS.highlights.set(`theme-wave-${key}`, highlight);
        return [key, highlight];
      }));
      const eligibility = new WeakMap();
      const textColor = element => {
        if (eligibility.has(element)) return eligibility.get(element);
        let key = null;
        const style = getComputedStyle(element);
        if (!element.closest('script,style,svg,button,input,textarea,select,dialog,.theme-water,[hidden]') && style.visibility !== 'hidden') {
          // カードやボタンなど、独自の背景がある文字は満水後に背景と一緒に補間する。
          let covered = false;
          for (let parent = element; parent && parent !== document.body; parent = parent.parentElement) {
            const surface = getComputedStyle(parent);
            if (surface.backgroundColor !== 'rgba(0, 0, 0, 0)' || surface.backgroundImage !== 'none') { covered = true; break; }
          }
          if (!covered) key = keys.find(name => previous[name] === style.color) || null;
        }
        eligibility.set(element, key);
        return key;
      };
      const letters = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const startX = scrollX, startY = scrollY;
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!node.textContent.trim()) continue;
        const key = textColor(node.parentElement);
        if (!key) continue;
        const whole = document.createRange(); whole.selectNodeContents(node);
        const box = whole.getBoundingClientRect();
        if (!box.width || box.bottom < 0 || box.top > innerHeight) continue;
        for (let offset = 0; offset < node.length;) {
          const end = offset + (node.textContent.codePointAt(offset) > 0xffff ? 2 : 1);
          const range = document.createRange(); range.setStart(node, offset); range.setEnd(node, end);
          const rect = range.getBoundingClientRect();
          if (rect.width && rect.bottom >= 0 && rect.top <= innerHeight) letters.push({ range, key, x:(rect.left + rect.right) / 2 + startX, y:(rect.top + rect.bottom) / 2 + startY, active:false });
          offset = end;
        }
      }
      const svg = water.querySelector('svg'), path = svg.querySelector('path');
      const points = [];
      for (let length = 0; length <= path.getTotalLength(); length += 6) {
        const point = path.getPointAtLength(length); points.push(point);
        if (point.x >= 1439) break; // SVGの波の上辺だけを採取する。
      }
      let frame;
      const update = () => {
        const wave = svg.getBoundingClientRect();
        for (const letter of letters) {
          const x = Math.max(0, Math.min(1440, (letter.x - scrollX - wave.left) / wave.width * 1440));
          let low = 0, high = points.length - 1;
          while (low < high) { const mid = (low + high) >> 1; if (points[mid].x < x) low = mid + 1; else high = mid; }
          const boundary = wave.top + points[low].y / 48 * wave.height;
          const active = letter.y - scrollY >= boundary;
          if (active !== letter.active) {
            highlights[letter.key][active ? 'add' : 'delete'](letter.range);
            letter.active = active;
          }
        }
        frame = requestAnimationFrame(update);
      };
      frame = requestAnimationFrame(update);
      return () => {
        cancelAnimationFrame(frame);
        keys.forEach(key => { CSS.highlights.delete(`theme-wave-${key}`); root.style.removeProperty(`--theme-wave-${key}`); });
      };
    };
    button.hidden = false; sync();
    button.addEventListener('click', async () => {
      if (switching) return;
      switching = true;
      button.setAttribute('aria-disabled', 'true');
      button.setAttribute('aria-busy', 'true');
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches || !window.CSS?.highlights || !window.Highlight;
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
      let clearWaveText = () => {};
      try {
        if (!reduced) clearWaveText = followWaveText(water, next);
        // 初期位置を確定してから、薄い水色の幕を下から満たす。
        water.getBoundingClientRect();
        const filling = waitForTransition(water, reduced ? 'opacity' : 'transform', reduced ? 450 : 1400);
        water.classList.add('is-filled');
        await filling;
        // 背景が満たされたら、文字・カードの色も補間しながら新テーマへなじませる。
        root.classList.add('theme-changing');
        applyTheme();
        const settling = waitForTransition(water, 'opacity', 1200);
        water.classList.add('is-settling');
        await settling;
      } finally {
        applyTheme();
        clearWaveText();
        water.remove();
        root.classList.remove('theme-changing');
        button.removeAttribute('aria-disabled');
        button.removeAttribute('aria-busy');
        switching = false;
      }
    });
  });
})();
