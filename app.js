(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const $ = id => document.getElementById(id);
  const el = (tag, text, className) => { const n = document.createElement(tag); if (text) n.textContent = text; if (className) n.className = className; return n; };
  const safeURL = value => { if (typeof value !== 'string' || !value.trim()) return null; try { const url = new URL(value, location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; } };
  const addLinks = (container, links = []) => links.forEach(link => {
    const url = safeURL(link.url); if (!url) return;
    const a = el('a', '', 'text-link'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    if (link.icon) {
      const icon = el('img', '', 'link-icon'); icon.src = link.icon; icon.alt = ''; icon.addEventListener('error', () => icon.remove()); a.append(icon);
    } else if (new URL(url).hostname === 'github.com') {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('class', 'link-icon'); svg.setAttribute('aria-hidden', 'true');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('fill', 'currentColor'); path.setAttribute('d', 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z'); svg.append(path); a.append(svg);
    }
    a.append(el('span', `${link.label} ↗`)); container.append(a);
  });
  const p = data.profile;
  const schoolText = [p.school, p.course, p.specialization].filter(Boolean).join('\n');
  if (data.site?.favicon) document.getElementById('site-icon').href = data.site.favicon;
  document.title = `${p.name} | Game Creator Portfolio`;
  document.querySelector('meta[name="description"]').content = p.intro;
  ['headline', 'intro', 'name', 'school', 'bio'].forEach(key => $(key).textContent = p[key]);
  $('school').textContent = schoolText;
  $('sample-notice').hidden = !data.sampleMode;
  [['名前', [p.name, p.nameReading && `（${p.nameReading}）`].filter(Boolean).join('\n')], ['学校・所属', schoolText], ['卒業', p.graduation], ['興味のある分野', p.interests]].forEach(([label, value]) => { if (value) $('profile').append(el('dt', label), el('dd', value)); });
  addLinks($('socials'), p.links);
  addLinks($('footer-socials'), p.links);
  $('footer-socials').hidden = !$('footer-socials').childElementCount;
  const contact = el('div', '', 'contact');
  const emailLabel = el('label', 'メールアドレス'); emailLabel.htmlFor = 'contact-email';
  const emailInput = el('input'); emailInput.id = 'contact-email'; emailInput.type = 'email'; emailInput.readOnly = true; emailInput.value = p.email || ''; emailInput.placeholder = 'メールアドレスは準備中です';
  const contactRow = el('div', '', 'contact-row'); contactRow.append(emailInput);
  const contactStatus = el('p', '', 'contact-status'); contactStatus.setAttribute('aria-live', 'polite');
  if (p.email && emailInput.validity.valid) {
    const mail = el('a', 'メールを開く ↗', 'text-link'); mail.href = `mailto:${encodeURIComponent(p.email)}`; contactRow.append(mail);
    const copy = el('button', 'コピー'); copy.type = 'button'; copy.addEventListener('click', async () => { try { await navigator.clipboard.writeText(p.email); contactStatus.textContent = 'コピーしました。'; } catch { emailInput.focus(); emailInput.select(); contactStatus.textContent = 'アドレスを選択しました。コピーしてください。'; } }); contactRow.append(copy);
  }
  contact.append(emailLabel, contactRow, contactStatus); $('socials').before(contact);
  $('copyright').textContent = `© ${new Date().getFullYear()} ${p.name}`;
  const dialog = $('work-dialog');
  let opener;
  const openDetail = (game, button) => {
    opener = button;
    const body = $('dialog-content'); body.replaceChildren();
    body.append(el('p', `${game.category} / ${game.year}`, 'eyebrow'));
    const title = el('h2', game.title); title.id = 'dialog-title'; body.append(title);
    const layout = el('div', '', 'work-detail-layout');
    const mediaColumn = el('section', '', 'media-gallery'); mediaColumn.setAttribute('aria-label', `${game.title}の動画とスクリーンショット`);
    const summary = el('aside', '', 'work-detail-summary'); summary.setAttribute('aria-label', '作品情報');
    if (game.image) { const cover = el('img', '', 'work-detail-cover'); cover.src = game.image; cover.alt = game.imageAlt || game.title; summary.append(cover); }
    summary.append(el('p', game.description, 'work-detail-description'));
    const facts = el('dl', '', 'profile');
    [['担当', game.role], ['制作期間', game.period], ['人数', game.team], ['使用技術', game.tools.join(' / ')]].forEach(([k, v]) => { if (v) facts.append(el('dt', k), el('dd', v)); });
    summary.append(facts);
    const tags = el('div', '', 'tags'); game.tools.forEach(tool => tags.append(el('span', tool))); summary.append(tags);
    const links = el('div', '', 'socials'); addLinks(links, game.links); summary.append(links);
    const shots = game.screenshots?.length ? game.screenshots : game.image ? [{ src: game.image, caption: game.imageAlt || game.title }] : [];
    const video = game.video;
    const media = [];
    if (video?.src || /^[\w-]{11}$/.test(video?.youtubeId || '')) media.push({type:'video', caption:video.caption || 'プレイ動画', thumbnail:video.poster || game.image});
    shots.forEach((shot, index) => media.push({type:'image', src:shot.src, caption:shot.caption || `スクリーンショット ${index + 1}`}));
    const stage = el('div', '', 'media-stage');
    const caption = el('p', '', 'media-caption'); caption.setAttribute('aria-live', 'polite');
    const toolbar = el('div', '', 'media-toolbar');
    const previous = el('button', '‹', 'media-nav'); previous.type = 'button'; previous.setAttribute('aria-label', '前のメディアを表示');
    const next = el('button', '›', 'media-nav'); next.type = 'button'; next.setAttribute('aria-label', '次のメディアを表示');
    const position = el('span', '', 'media-position'); position.setAttribute('aria-live', 'polite');
    toolbar.append(previous, position, next);
    const rail = el('div', '', 'media-thumbnails'); rail.setAttribute('role', 'group'); rail.setAttribute('aria-label', '動画とスクリーンショットを選択');
    let selected = -1;
    const selectMedia = (index, scrollThumbnail = false) => {
      if (index === selected || !media.length) return;
      selected = (index + media.length) % media.length;
      stage.querySelectorAll('video').forEach(player => player.pause());
      stage.replaceChildren(); // iframeも削除し、画像へ切り替えたら動画を止める。
      const item = media[selected];
      if (item.type === 'video' && video.src) {
        const player = el('video'); player.controls = true; player.preload = 'metadata'; player.playsInline = true; player.src = video.src; if (video.poster) player.poster = video.poster; player.setAttribute('aria-label', `${game.title}のプレイ動画`); stage.append(player);
      } else if (item.type === 'video') {
        const frame = el('iframe'); frame.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}`; frame.title = `${game.title}のプレイ動画`; frame.allowFullscreen = true; frame.allow = 'encrypted-media; picture-in-picture'; frame.referrerPolicy = 'strict-origin-when-cross-origin'; stage.append(frame);
      } else {
        const image = el('img'); image.src = item.src; image.alt = item.caption;
        image.addEventListener('error', () => { if (stage.contains(image)) stage.replaceChildren(el('p', '画像を読み込めませんでした。', 'media-error')); }); stage.append(image);
      }
      caption.textContent = item.caption;
      position.textContent = `${selected + 1} / ${media.length} · ${item.type === 'video' ? 'プレイ動画' : '画像'}`;
      [...rail.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === selected)));
      if (scrollThumbnail) {
        const thumb = rail.children[selected];
        if (thumb.offsetLeft < rail.scrollLeft || thumb.offsetLeft + thumb.offsetWidth > rail.scrollLeft + rail.clientWidth) rail.scrollLeft = thumb.offsetLeft - (rail.clientWidth - thumb.offsetWidth) / 2;
      }
    };
    media.forEach((item, index) => {
      const thumb = el('button', '', 'media-thumb'); thumb.type = 'button'; thumb.setAttribute('aria-label', item.type === 'video' ? 'プレイ動画を表示' : `${item.caption}を表示`); thumb.setAttribute('aria-pressed', 'false');
      const image = el('img'); image.src = item.type === 'video' ? item.thumbnail || '' : item.src; image.alt = ''; image.loading = 'lazy'; image.addEventListener('error', () => image.remove()); if (image.getAttribute('src')) thumb.append(image);
      thumb.append(el('span', item.type === 'video' ? '▶ 動画' : `${index + (media[0]?.type === 'video' ? 0 : 1)}`, 'media-thumb-label'));
      thumb.addEventListener('click', () => selectMedia(index)); rail.append(thumb);
    });
    previous.addEventListener('click', () => selectMedia(selected - 1, true)); next.addEventListener('click', () => selectMedia(selected + 1, true));
    rail.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault(); selectMedia(selected + (event.key === 'ArrowRight' ? 1 : -1), true); rail.children[selected].focus({preventScroll:true});
    });
    if (media.length) { mediaColumn.append(stage, rail, toolbar, caption); previous.disabled = next.disabled = media.length < 2; selectMedia(0); }
    else mediaColumn.append(el('p', '画像・動画は準備中です。', 'empty-message'));
    layout.append(mediaColumn, summary); body.append(layout);
    const notes = el('section', '', 'work-detail-notes');
    if (game.detail) notes.append(el('h3', '作品について'), el('p', game.detail));
    if (game.highlights?.length) {
      notes.append(el('h3', '工夫したところ'));
      const list = el('ul'); game.highlights.forEach(t => list.append(el('li', t))); notes.append(list);
    }
    if (notes.childElementCount) body.append(notes);
    dialog.showModal(); dialog.scrollTop = 0; document.body.classList.add('modal-open');
  };
  $('close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { $('dialog-content').querySelectorAll('video').forEach(v => v.pause()); $('dialog-content').querySelectorAll('iframe').forEach(f => f.remove()); document.body.classList.remove('modal-open'); opener?.focus(); });
  const renderGames = category => {
    const games = data.games.filter(g => category === 'すべて' || g.category === category);
    $('work-list').replaceChildren(); $('work-count').textContent = data.games.length ? `${games.length}件の作品` : '作品詳細は準備中です。';
    if (!games.length) {
      const summary = el('div', '', 'works-summary');
      summary.append(el('p', data.worksIntro?.countLabel || '作品は準備中です。', 'works-total'));
      if (data.worksIntro?.description) summary.append(el('p', data.worksIntro.description));
      $('work-list').append(summary);
    }
    games.forEach((game, i) => {
      const card = el('article', '', 'work');
      const visual = el('button', '', `work-visual ${['mint', 'peach', 'lavender'].includes(game.theme) ? game.theme : 'mint'}`);
      visual.type = 'button'; visual.setAttribute('aria-label', `${game.title}の詳細を開く`);
      visual.addEventListener('click', () => openDetail(game, visual));
      const placeholder = () => { visual.replaceChildren(el('span', data.sampleMode ? 'SAMPLE / GAME VISUAL' : 'GAME VISUAL', 'visual-label'), el('div', ['◈', '▦', '✦'][i % 3], 'visual-symbol'), el('span', data.sampleMode ? '作品画像をここに配置' : 'スクリーンショット準備中', 'visual-caption')); };
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
  $('filters').hidden = !data.games.length;
  if (data.games.length) {
    const overview = el('p', `${data.worksIntro?.countLabel || ''} · 掲載 ${data.games.length}作品`, 'works-overview');
    $('filters').before(overview);
  }
  if (data.sourceProjects?.length) {
    const details = el('details', '', 'source-projects');
    details.append(el('summary', `公開ソースコード / GitHub ${data.sourceProjects.length}件`));
    const links = el('div', '', 'source-links'); addLinks(links, data.sourceProjects); details.append(links); $('work-list').after(details);
  }
  data.skillGroups.forEach(group => { const section = el('section', '', 'skill-group'); section.append(el('p', group.subtitle, 'eyebrow'), el('h3', group.title)); group.items.forEach(item => { const row = el('div', '', 'skill'); row.append(el('h4', item.name), el('span', item.experience, 'experience'), el('p', item.description), el('p', item.projects, 'skill-project')); section.append(row); }); $('skill-list').append(section); });
  data.events.forEach(event => { const row = el('article', '', `event${event.date ? '' : ' event-undated'}`); const body = el('div'); body.append(el('h3', event.title)); if (event.description) body.append(el('p', event.description)); if (event.url) addLinks(body, [{ label: 'イベントを見る', url: event.url }]); if (event.date) row.append(el('span', event.date, 'event-date')); row.append(el('span', event.type, 'event-type'), body); $('event-list').append(row); });
  if (!data.events.length) $('event-list').append(el('p', '活動の記録は準備中です。'));
  const internships = data.internships || [];
  internships.forEach(item => {
    const card = el('article', '', 'internship-card');
    if (item.period) card.append(el('p', item.period, 'eyebrow'));
    card.append(el('h3', item.company));
    if (item.title) card.append(el('p', item.title, 'internship-title'));
    if (item.description) card.append(el('p', item.description));
    if (item.role) { card.append(el('h4', '担当したこと'), el('p', item.role)); }
    if (item.learnings?.length) { const list = el('ul'); item.learnings.forEach(value => list.append(el('li', value))); card.append(el('h4', '学んだこと'), list); }
    const links = el('div', '', 'socials'); addLinks(links, item.links); card.append(links);
    $('internship-list').append(card);
  });
  if (!internships.length) $('internship-list').append(el('p', '参加経験の詳細は、順次公開予定です。', 'empty-message'));
})();
