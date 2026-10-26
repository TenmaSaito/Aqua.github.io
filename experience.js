(() => {
  const config = window.PORTFOLIO?.presentation || {};
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const top = document.getElementById('back-top');
  top.hidden = false;
  const updateTop = () => {
    const visible = scrollY >= 480;
    top.classList.toggle('is-shown', visible);
    top.inert = !visible;
    top.setAttribute('aria-hidden', String(!visible));
  };
  addEventListener('scroll', updateTop, {passive:true}); updateTop();
  top.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:reduced.matches ? 'instant' : 'smooth'});
    document.querySelector('.brand').focus({preventScroll:true});
  });

  let revealObserver;
  const reveal = () => {
    if (config.reveal === false || reduced.matches || !('IntersectionObserver' in window)) return;
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    }), {threshold:0.08});
    document.querySelectorAll('.section').forEach(section => {
      // すでに表示範囲にある内容は隠さない。JS失敗時も本文は常に表示される。
      if (section.getBoundingClientRect().top > innerHeight) { section.classList.add('reveal'); revealObserver.observe(section); }
    });
  };
  document.addEventListener('focusin', event => event.target.closest('.reveal')?.classList.add('is-visible'));
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
    const id = link.getAttribute('href').slice(1); if (id) document.getElementById(id)?.classList.add('is-visible');
  }));

  const splash = document.getElementById('splash');
  const options = config.splash || {};
  const initialHash = location.hash.slice(1);
  let finished = false;
  let fading = false;
  let timer;
  let fadeTimer;
  const finish = () => {
    if (finished) return; finished = true; clearTimeout(timer);
    clearTimeout(fadeTimer);
    const focused = splash.contains(document.activeElement);
    splash.hidden = true;
    document.body.classList.remove('intro-active');
    document.querySelectorAll('[data-intro-inert]').forEach(node => { node.inert = false; node.removeAttribute('data-intro-inert'); });
    if (focused) document.querySelector('.brand').focus({preventScroll:true});
    document.body.classList.add('intro-finished'); reveal();
    updateTop();
  };
  const fadeOut = () => {
    if (finished || fading) return;
    fading = true; clearTimeout(timer);
    document.getElementById('splash-status').textContent = '準備できました';
    splash.classList.add('splash-full');
    // 満水状態を短く見せてから、スプラッシュと本文をクロスフェード。
    fadeTimer = setTimeout(() => {
      splash.classList.add('splash-fading');
      document.body.classList.add('intro-revealing');
      splash.addEventListener('transitionend', event => {
        if (event.target === splash && event.propertyName === 'opacity') finish();
      });
      fadeTimer = setTimeout(finish, 750);
    }, 180);
  };
  reduced.addEventListener('change', () => {
    if (reduced.matches) { finish(); revealObserver?.disconnect(); document.querySelectorAll('.reveal').forEach(n => n.classList.add('is-visible')); }
  });
  // ハッシュ付きの直接リンクと動きを抑える設定では導入を省略。
  if (options.enabled === false || reduced.matches || location.hash) {
    finish();
    // 外部データで本文が増えた後の見出し位置へ合わせる。
    if (initialHash) requestAnimationFrame(() => {
      let id; try { id = decodeURIComponent(initialHash); } catch { return; }
      const target = document.getElementById(id);
      target?.classList.add('is-visible');
      target?.scrollIntoView({behavior:'instant', block:'start'});
      updateTop();
    });
    return;
  }
  document.getElementById('splash-title').textContent = options.title || 'AQUART';
  document.getElementById('splash-subtitle').textContent = options.subtitle || 'IDEAS FLOW INTO PLAY.';
  if (options.image) {
    const image = document.getElementById('splash-image'); image.src = options.image; image.hidden = false;
    image.addEventListener('error', () => { image.hidden = true; });
  }
  const skip = document.getElementById('splash-skip'); skip.addEventListener('click', finish);
  splash.addEventListener('keydown', event => { if (event.key === 'Escape') finish(); if (event.key === 'Tab') { event.preventDefault(); skip.focus(); } });
  document.querySelectorAll('body > header, body > main, body > footer, .skip, #back-top').forEach(node => { node.inert = true; node.dataset.introInert = ''; });
  const duration = Math.min(5000, Math.max(1200, Number(options.durationMs) || 2200));
  splash.style.setProperty('--fill-duration', `${duration}ms`);
  splash.querySelector('.loader-fill').addEventListener('animationend', event => {
    if (event.animationName === 'liquid-fill') fadeOut();
  });
  splash.hidden = false; document.body.classList.add('intro-active'); skip.focus({preventScroll:true});
  // アニメーション完了イベントが得られない環境でも本文に到達できるようにする。
  timer = setTimeout(fadeOut, duration + 300);
})();
