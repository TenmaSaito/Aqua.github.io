// ============================================================
// 作品データ：『MASK TETRIS』
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
window.AQUART_CONTENT.gamesById["mask-tetris"] = {
  "id": "mask-tetris",
  "relatedEventId": "global-game-jam",
  "relatedEventLabel": "Global Game Jam 制作",
  "title": "MASK TETRIS",
  "subtitle": "すり抜け即時設置が特徴のテトリス",
  "category": "Game Jam",
  "year": "2026",
  "image": "assets/work-mask.jpg",
  "imageAlt": "MASK TETRISのタイトル画面",
  "description": "Global Game Jam（GGJ Sapporo 2026）で制作したテトリス系ゲーム。Eキーでブロックをすり抜けて即時設置できる独自ギミックが特徴。",
  "tools": [
    "C++",
    "DirectX"
  ],
  "period": "2026/01/30 ～ 2026/02/01（2日間）",
  "team": "3名",
  "detail": "Global Game Jam（GGJ Sapporo 2026）で3名チーム・2日間で制作したテトリス系ゲームです。独自ギミックはEキーの「すり抜け即時設置」。操作は、矢印キーで移動、SPACE／左SHIFTで回転、TABでホールド（ミノ保持）、Eですり抜け即時設置で、ゲームオーバー後にランキングが表示されます。担当（齊藤天眞）は表示・管理まわり＋計算基盤で、9組18ファイル・計4,026行（BackGroundManager、HoldController、MessageLog、NextNoticeController、StageMinoManager、TitleLogoController、character、mathUtil、mino）。もう1人のプログラマ SHUMA AIZU は main／game／minocontroller／score／sound／ranking など本体進行側を担当しました。",
  "screenshots": [
    {
      "src": "assets/mask-shot-01.jpg",
      "caption": "タイトル画面（カラフルな「MASK TETRIS」ロゴと PRESS START BUTTON、GGJ SAP 2026 表記）"
    },
    {
      "src": "assets/mask-shot-02.jpg",
      "caption": "プレイ序盤（スコア500、Hold は空、Next 表示と仮面のキャラクター）"
    },
    {
      "src": "assets/mask-shot-03.jpg",
      "caption": "プレイ中（スコア1000、赤いミノが落下中、下段にブロックが積み上がり始める）"
    },
    {
      "src": "assets/mask-shot-04.jpg",
      "caption": "ホールド使用中（Hold にオレンジのミノを保持、スコア1000）"
    },
    {
      "src": "assets/mask-shot-05.jpg",
      "caption": "プレイ終盤寄り（ブロックが高く積み上がった状態、スコア1000）"
    },
    {
      "src": "assets/mask-shot-06.jpg",
      "caption": "ゲームオーバー後のランキング画面（スコア一覧 50500 / 33000 / 24500 / 20000 / 20000）"
    }
  ],
  "links": []
};
