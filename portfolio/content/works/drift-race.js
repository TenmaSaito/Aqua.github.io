// ============================================================
// 作品データ：『ドリフトレース（仮）』
// このファイルは、この作品ひとつぶんのデータです。
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
window.AQUART_CONTENT.gamesById = window.AQUART_CONTENT.gamesById || {};
window.AQUART_CONTENT.gamesById["drift-race"] = {
  "id": "drift-race",
  "relatedEventId": "",
  "title": "ドリフトレース（仮）",
  "subtitle": "ツインスティックで滑らせるドリフトレース",
  "category": "Webゲーム",
  "year": "2026",
  "image": "assets/work-drift.jpg",
  "imageAlt": "ドリフトレース（仮）のゲーム画面",
  "description": "ブラウザで遊べるドリフト特化のレースゲーム。Inertial Drift風のツインスティック操作で車を滑らせ、3つのコースでタイムアタックに挑む。初の完全バイブコーディングによる一人制作。",
  "tools": [
    "C++",
    "SDL2",
    "WebAssembly"
  ],
  "period": "2026/10/29 ～ 2026/10/31",
  "team": "1名",
  "detail": "学校課題として制作したWebブラウザ向けレースゲームです。C++／SDL2で開発し、WebAssemblyでブラウザ動作に対応。Inertial Driftを参考にしたツインスティック式のドリフト操作、鈴鹿・Flow・Coastの3コース、特性の異なる3車種、ミニマップやラップタイム表示を実装しました。本作は一人制作で、初めての完全バイブコーディング（AIとの対話のみで組み上げる制作手法）への挑戦でした。制作を通して、プロンプトを組む大変さと、考えを言語化して壁打ちを繰り返すことの大切さを学びました。",
  "screenshots": [
    {
      "src": "assets/drift-shot-01.jpg",
      "caption": "ゲーム画面（コース走行中、ミニマップとラップタイム表示）"
    },
    {
      "src": "assets/drift-shot-02.jpg",
      "caption": "スタート地点（ゲートと車両、コースマップ表示）"
    }
  ],
  "links": [
    {
      "label": "ブラウザで遊ぶ",
      "url": "https://tenmasaito.github.io/racegame/"
    },
    {
      "label": "ソースコード（GitHub）",
      "url": "https://github.com/TenmaSaito/ge-i26-racegame-saito"
    }
  ]
};
