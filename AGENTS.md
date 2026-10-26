# Portfolio maintenance

- Preserve readability as the highest design priority: clear hierarchy, sufficient contrast, comfortable line lengths, spacing, and visible keyboard focus.
- Maintain both light and dark themes. Check the changed areas on desktop and at 390px width before delivery. Keep navigation usable without horizontal overflow.
- Put content changes in `content.js`; never invent personal achievements, companies, dates, project details, or skills.
- Put final theme and layout adjustments in `appearance.css`. Themes use CSS variables and must preserve readable surfaces for text, cards, inputs, and dialogs.
- Keep animation secondary to content. Honor reduced-motion settings, provide a way to pause continuous decorative motion, and avoid flashing or large moving backgrounds behind text.
- The intro fills the whole viewport with water, with the whale riding the surface, waits until full, then fades out while content fades in. Keep skip/Escape and a fallback so content is always reachable.
- Regenerate `preview.html` with `node make-preview.cjs` after source edits. Bump changed public asset URL versions in `index.html` to avoid mixed cached versions.
- Custom domain registration is incomplete; keep GitHub Pages on `https://tenmasaito.github.io/` until the user supplies a verified registered domain.
