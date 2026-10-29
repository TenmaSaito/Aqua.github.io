// ============================================================
// 活動ログ / イベント / インターンシップ
// 出展・参加イベントと、インターンシップの記録です。
//
// 【このファイルについて】
// ポートフォリオサイト「AQUART」の掲載内容の一部です。
// サイト本体（index.html）がこのファイルを読み込んで表示します。
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
window.AQUART_CONTENT.events = [
  {
    "id": "sapporo-game-odyssey",
    "title": "SAPPORO GAME ODYSSAY",
    "type": "出展",
    "depth": "−350m",
    "description": "札幌市地下歩行空間にて、C++で初めて制作した2Dゲームを展示。",
    "url": "https://www.sapporo-game-odyssey.jp/",
    "relatedWorkId": "takeru",
    "jumpLabel": "出展作品を見る"
  },
  {
    "id": "sapporo-game-camp",
    "title": "SAPPORO GAME CAMP",
    "type": "参加",
    "depth": "−370m",
    "description": "2026年度Game Jamに参加。Unity, C#を用いて2日でゲームを作成。",
    "url": "https://sapporo-game-camp.com/2026/",
    "relatedWorkId": "gamejam-work",
    "jumpLabel": "Game Jam作品を見る"
  },
  {
    "id": "global-game-jam",
    "title": "Global Game Jam",
    "type": "参加",
    "depth": "−390m",
    "description": "2026年度Global Game Jamに参加。C言語を用いて2日で2Dゲームを制作",
    "url": "https://www.infiniteloop.co.jp/pr-blog/2026/01/global-game-jam-sapporo-2026/",
    "relatedWorkId": "mask-tetris",
    "jumpLabel": "Game Jam作品を見る"
  }
];

window.AQUART_CONTENT = window.AQUART_CONTENT || {};
// 【「学んだこと」の書き方】
// 下の internships の中の "learnings": [] の [ ] の中に、
// 学んだことを1行ずつ " " で囲って追加してください。
// 例： "learnings": [
//        "学んだこと1",
//        "学んだこと2"
//      ]
// 1件以上書くと、サイトのインターン欄に「学んだこと」として
// 箇条書きで表示されます（空のうちは表示されません）。
window.AQUART_CONTENT.internships = [
  {
    "company": "バンダイナムコスタジオ",
    "period": "参加期間：10日間",
    "title": "C++ / WebAssembly / Android",
    "description": "C++で書いたコードをWebAssembly化し、ブラウザーで動作するよう制作しました。",
    "role": "基底クラスの作成、Androidへの移植。",
    "learnings": [
      "AIを用いたコーディングはプロンプトを正しく渡し、壁打ちを繰り返すことで既に実用的な物を出力すると知った。",
      "GitHub Actionsを用いたCIはコードの確認を自動で行う為、非常に有用だと知った。",
      "Dockerを用いた仮想コンテナ開発による環境統一は、動作のブレが起きないため大切だと知った。"
    ]
  }
];
