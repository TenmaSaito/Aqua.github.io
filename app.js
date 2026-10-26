(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const $ = id => document.getElementById(id);
  const el = (tag, text, className) => { const n = document.createElement(tag); if (text) n.textContent = text; if (className) n.className = className; return n; };
  const safeURL = value => { try { const url = new URL(value, location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; } };
  const addLinks = (container, links = []) => links.forEach(link => { const url = safeURL(link.url); if (!url) return; const a = el('a', `${link.label} ↗`, 'text-link'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; container.append(a); });
  const p = data.profile;
  document.title = `${p.name} | Game Creator Portfolio`;
  document.querySelector('meta[name="description"]').content = p.intro;
  ['headline', 'intro', 'name', 'school', 'bio'].forEach(key => $(key).textContent = p[key]);
  $('sample-notice').hidden = !data.sampleMode;
  [['名前', p.name], ['学校・所属', p.school], ['興味のある分野', p.interests]].forEach(([label, value]) => { if (value) $('profile').append(el('dt', label), el('dd', value)); });
  addLinks($('socials'), p.links);
  $('copyright').textContent = `© ${new Date().getFullYear()} ${p.name}`;
  const dialog = $('work-dialog');
  let opener;
  const openDetail = (game, button) => {
    opener = button;
    const body = $('dialog-content'); body.replaceChildren();
    body.append(el('p', `${game.category} / ${game.year}`, 'eyebrow'));
    const title = el('h2', game.title); title.id = 'dialog-title'; body.append(title, el('p', game.description, 'bio'));
    const facts = el('dl', '', 'profile');
    [['担当', game.role], ['制作期間', game.period], ['人数', game.team], ['使用技術', game.tools.join(' / ')]].forEach(([k, v]) => facts.append(el('dt', k), el('dd', v)));
    body.append(facts);
    const shots = game.screenshots?.length ? game.screenshots : game.image ? [{ src: game.image, caption: game.imageAlt || game.title }] : [];
    if (shots.length || data.sampleMode) {
      body.append(el('h3', 'スクリーンショット'));
      const gallery = el('div', '', 'gallery');
      shots.forEach(shot => { const figure = el('figure'); const img = el('img'); img.src = shot.src; img.alt = shot.caption || `${game.title}のゲーム画面`; img.loading = 'lazy'; figure.append(img); if (shot.caption) figure.append(el('figcaption', shot.caption)); gallery.append(figure); });
      if (!shots.length) gallery.append(el('div', 'SCREENSHOTS / 作品の画面を複数掲載できます', 'media-placeholder'));
      body.append(gallery);
    }
    const video = game.video;
    if (video?.src || /^[\w-]{11}$/.test(video?.youtubeId || '') || data.sampleMode) {
      body.append(el('h3', 'プレイ動画'));
      if (video?.src) {
        const player = el('video'); player.controls = true; player.preload = 'metadata'; player.playsInline = true; player.src = video.src; if (video.poster) player.poster = video.poster; player.setAttribute('aria-label', `${game.title}のプレイ動画`); body.append(player);
      } else if (/^[\w-]{11}$/.test(video?.youtubeId || '')) {
        const frame = el('iframe'); frame.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}`; frame.title = `${game.title}のプレイ動画`; frame.allowFullscreen = true; frame.allow = 'encrypted-media; picture-in-picture'; frame.referrerPolicy = 'strict-origin-when-cross-origin'; body.append(frame);
      } else body.append(el('div', 'PLAY MOVIE / 動画ファイル・YouTubeに対応', 'media-placeholder'));
      if (video?.caption) body.append(el('p', video.caption, 'media-caption'));
    }
    body.append(el('h3', '作品について'), el('p', game.detail), el('h3', '工夫したところ'));
    const list = el('ul'); (game.highlights || []).forEach(t => list.append(el('li', t))); body.append(list);
    const links = el('div', '', 'socials'); addLinks(links, game.links); body.append(links);
    dialog.showModal(); document.body.classList.add('modal-open');
  };
  $('close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { $('dialog-content').querySelectorAll('video').forEach(v => v.pause()); $('dialog-content').querySelectorAll('iframe').forEach(f => f.remove()); document.body.classList.remove('modal-open'); opener?.focus(); });
  const renderGames = category => {
    const games = data.games.filter(g => category === 'すべて' || g.category === category);
    $('work-list').replaceChildren(); $('work-count').textContent = `${games.length}件の作品`;
    if (!games.length) $('work-list').append(el('p', '作品は準備中です。'));
    games.forEach((game, i) => {
      const card = el('article', '', 'work');
      const visual = el('div', '', `work-visual ${['mint', 'peach', 'lavender'].includes(game.theme) ? game.theme : 'mint'}`);
      const placeholder = () => { visual.replaceChildren(el('span', 'SAMPLE / GAME VISUAL', 'visual-label'), el('div', ['◈', '▦', '✦'][i % 3], 'visual-symbol'), el('span', '作品画像をここに配置', 'visual-caption')); };
      if (game.image) { const img = el('img'); img.src = game.image; img.alt = game.imageAlt || `${game.title}のスクリーンショット`; img.loading = 'lazy'; img.addEventListener('error', placeholder); visual.append(img); } else placeholder();
      const meta = el('p', `${game.category} / ${game.year}`, 'work-meta');
      const button = el('button', `${game.title} ↗`, 'work-title'); button.addEventListener('click', () => openDetail(game, button));
      const tags = el('div', '', 'tags'); game.tools.forEach(t => tags.append(el('span', t)));
      card.append(visual, meta, button, el('p', game.subtitle, 'subtitle'), el('p', game.description, 'work-description'), tags); $('work-list').append(card);
    });
  };
  ['すべて', ...new Set(data.games.map(g => g.category))].forEach((category, i) => {
    const button = el('button', category); button.setAttribute('aria-pressed', String(i === 0));
    button.addEventListener('click', () => { [...$('filters').children].forEach(b => b.setAttribute('aria-pressed', String(b === button))); renderGames(category); }); $('filters').append(button);
  }); renderGames('すべて');
  data.skillGroups.forEach(group => { const section = el('section', '', 'skill-group'); section.append(el('p', group.subtitle, 'eyebrow'), el('h3', group.title)); group.items.forEach(item => { const row = el('div', '', 'skill'); row.append(el('h4', item.name), el('span', item.experience, 'experience'), el('p', item.description), el('p', item.projects, 'skill-project')); section.append(row); }); $('skill-list').append(section); });
  data.events.forEach(event => { const row = el('article', '', 'event'); const body = el('div'); body.append(el('h3', event.title), el('p', event.description)); if (event.url) addLinks(body, [{ label: 'イベントを見る', url: event.url }]); row.append(el('span', event.date, 'event-date'), el('span', event.type, 'event-type'), body); $('event-list').append(row); });
  if (!data.events.length) $('event-list').append(el('p', '活動の記録は準備中です。'));
})();
