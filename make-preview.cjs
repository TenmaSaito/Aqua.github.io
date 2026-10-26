// 最新のソースから、ブラウザーで直接開けるプレビューを作成します。
const fs = require('node:fs');
const path = require('node:path');
const read = name => fs.readFileSync(path.join(__dirname, name), 'utf8');
// 掲載文中の </script> が HTML の script 要素を終了させないようにします。
const script = name => '<script>' + read(name).replace(/<\/script/gi, '<\\/script') + '</script>';
const html = read('index.html')
  .replace('<link rel="stylesheet" href="./style.css">', () => '<style>' + read('style.css') + '</style>')
  .replace('<link rel="stylesheet" href="./theme.css">', () => '<style>' + read('theme.css') + '</style>')
  .replace('<script defer src="./content.js"></script>', '')
  .replace('<script defer src="./app.js"></script>', '')
  .replace('</body>', () => script('content.js') + script('app.js') + '</body>');
fs.writeFileSync(path.join(__dirname, 'preview.html'), html);
console.log('Updated preview.html');
