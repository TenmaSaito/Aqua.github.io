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
  let finished = false;
  let timer;
  const finish = () => {
    if (finished) return; finished = true; clearTimeout(timer);
    const focused = splash.contains(document.activeElement);
    splash.hidden = true;
    document.body.classList.remove('intro-active');
    document.querySelectorAll('[data-intro-inert]').forEach(node => { node.inert = false; node.removeAttribute('data-intro-inert'); });
    if (focused) document.querySelector('.brand').focus({preventScroll:true});
    document.body.classList.add('intro-finished'); reveal();
  };
  reduced.addEventListener('change', () => {
    if (reduced.matches) { finish(); revealObserver?.disconnect(); document.querySelectorAll('.reveal').forEach(n => n.classList.add('is-visible')); }
  });
  // ハッシュ付きの直接リンクと動きを抑える設定では導入を省略。
  if (options.enabled === false || reduced.matches || location.hash) { finish(); return; }
  document.getElementById('splash-title').textContent = options.title || 'AQUART';
  document.getElementById('splash-subtitle').textContent = options.subtitle || 'IDEAS FLOW INTO PLAY.';
  if (options.image) {
    const image = document.getElementById('splash-image'); image.src = options.image; image.hidden = false;
    const drop = splash.querySelector('.splash-drop'); drop.hidden = true;
    image.addEventListener('error', () => { image.hidden = true; drop.hidden = false; });
  }
  const skip = document.getElementById('splash-skip'); skip.addEventListener('click', finish);
  splash.addEventListener('keydown', event => { if (event.key === 'Escape') finish(); if (event.key === 'Tab') { event.preventDefault(); skip.focus(); } });
  document.querySelectorAll('body > header, body > main, body > footer, .skip, #back-top').forEach(node => { node.inert = true; node.dataset.introInert = ''; });
  splash.hidden = false; document.body.classList.add('intro-active'); skip.focus({preventScroll:true});
  timer = setTimeout(finish, Math.min(4000, Math.max(400, Number(options.durationMs) || 1600)));
})();
