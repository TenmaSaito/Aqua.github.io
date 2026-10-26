// 最新のソースから、ブラウザーで直接開けるプレビューを作成します。
const fs = require('node:fs');
const path = require('node:path');
const read = name => fs.readFileSync(path.join(__dirname, name), 'utf8');
// 掲載文中の </script> が HTML の script 要素を終了させないようにします。
const script = name => '<script>' + read(name).replace(/<\/script/gi, '<\\/script') + '</script>';
const html = read('index.html').replace(/\?v=[^"\s]+/g, '')
  .replace('<script src="./theme-control.js"></script>', () => script('theme-control.js'))
  .replace('<link rel="stylesheet" href="./style.css">', () => '<style>' + read('style.css') + '</style>')
  .replace('<link rel="stylesheet" href="./theme.css">', () => '<style>' + read('theme.css') + '</style>')
  .replace('<link rel="stylesheet" href="./water.css">', () => '<style>' + read('water.css') + '</style>')
  .replace('<link rel="stylesheet" href="./light.css">', () => '<style>' + read('light.css') + '</style>')
  .replace('<link rel="stylesheet" href="./appearance.css">', () => '<style>' + read('appearance.css') + '</style>')
  .replace('<script defer src="./content.js"></script>', '')
  .replace('<script defer src="./app.js"></script>', '')
  .replace('<script defer src="./water.js"></script>', '')
  .replace('<script defer src="./experience.js"></script>', '')
  .replace('</body>', () => script('content.js') + script('app.js') + script('water.js') + script('experience.js') + '</body>');
fs.writeFileSync(path.join(__dirname, 'preview.html'), html.replace(/^[ \t]+$/gm, ''));
console.log('Updated preview.html');
