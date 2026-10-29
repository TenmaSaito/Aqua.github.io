// ============================================================
// 作品一覧：導入文と表示順リスト
// 作品ページの導入文と、作品を表示する順番のリストです。
// 作品を増やすときは、content/works/ に新しいファイルを作って、
// 下の gamesOrder にそのIDを1行追加してください。
//
// 【編集のしかた（GitHubの画面でOK）】
// 1. このファイルのページで、右上の鉛筆マーク（Edit this file）を押す
// 2. 直したい文字を書き換える
// 3. 画面下の「Commit changes」を押すと、1〜2分でサイトに反映されます
//
// 【書き換えるときの注意】
// ・文章は " " （ダブルクォート）で囲まれた部分だけを書き換えてください
// ・行末のカンマ（ , ）や、カッコの数を消したり増やしたりしないでください
// ・もし壊してしまっても大丈夫です。サイト本体にも同じ内容のコピーが
//   入っているので、サイトが真っ白になることはありません。
//   直し方が分からなければ、むぎ（Muse）に声をかけてください。
// ============================================================

window.AQUART_CONTENT = window.AQUART_CONTENT || {};
window.AQUART_CONTENT.worksIntro = {
  "countLabel": "",
  "description": ""
};

window.AQUART_CONTENT = window.AQUART_CONTENT || {};
window.AQUART_CONTENT.gamesOrder = [
  "denryu-connection",
  "hide-and-run",
  "xmas-stealth",
  "apprentice-mapmaker",
  "izayoi-collector",
  "gear-girl",
  "goricat",
  "takeru",
  "gamejam-work"
];
