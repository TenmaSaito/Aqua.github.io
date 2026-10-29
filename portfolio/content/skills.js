// ============================================================
// スキル / ソースプロジェクト
// 使える技術の一覧と、GitHubで公開しているソースコードの一覧です。
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
window.AQUART_CONTENT.skillGroups = [
  {
    "title": "プログラミング言語",
    "subtitle": "LANGUAGES",
    "items": [
      {
        "name": "C / C++",
        "category": "LANGUAGE",
        "experience": "1年半",
        "expSegments": 9,
        "maxSegments": 12,
        "description": "ゲーム制作の主力言語。掲載作品の多くをC / C++とDirectX9で制作しています。",
        "env": "使用IDE：Visual Studio 2019 / VS Code",
        "projects": "DirectX9",
        "languages": [
          "C",
          "C++"
        ]
      },
      {
        "name": "C#",
        "category": "LANGUAGE",
        "experience": "1年",
        "expSegments": 6,
        "maxSegments": 12,
        "description": "Unityでのゲーム制作に使用。ゲームジャムでもC#で開発しました。",
        "env": "使用IDE：Visual Studio 2019",
        "projects": "Unity",
        "languages": [
          "C#"
        ]
      }
    ]
    },
    {
        "title": "ゲームエンジン",
        "subtitle": "GAMEENGINE",
        "items": [
            {
                "name": "Unity",
                "category": "GAMEENGINE",
                "experience": "1年",
                "expSegments": 6,
                "maxSegments": 12,
                "description": "ゲーム制作に必要な操作(オブジェクト配置、スクリプト作成やShader Lab等)はある程度可能で、何本かゲームを作成した経験があります。",
                "env": "使用バージョン：Unity 2022.3",
            },
            {
                "name": "Unreal Engine",
                "category": "GAMEENGINE",
                "experience": "半年未満",
                "expSegments": 3,
                "maxSegments": 12,
                "description": "絶賛勉強中です。現在はブループリントによる開発勉強ですが、将来的にはVerse言語での開発の勉強をする予定です。",
                "env": "使用バージョン：UE5",
            }
        ]
    },
    {
        "title": "ツール",
        "subtitle": "TOOL",
        "items": [
            {
                "name": "GitHub",
                "category": "TOOL",
                "experience": "1年半",
                "expSegments": 9,
                "maxSegments": 12,
                "description": "ゲーム制作時に使用するバージョン管理ツール。GitHub ActionsによるPRチェックも勉強中です。",
                "env": "使用App：GitHub Desktop/TortoiseGit",
            }
        ]
    }
];

window.AQUART_CONTENT = window.AQUART_CONTENT || {};
window.AQUART_CONTENT.sourceProjects = [
  {
    "label": "ConnectingVolteccer",
    "url": "https://github.com/TenmaSaito/ConnectingVolteccer"
  },
  {
    "label": "cpp_TKG",
    "url": "https://github.com/TenmaSaito/cpp_TKG"
  },
  {
    "label": "2DActionGame",
    "url": "https://github.com/TenmaSaito/2DActionGame"
  },
  {
    "label": "PunchingHomerun",
    "url": "https://github.com/TenmaSaito/PunchingHomerun"
  },
  {
    "label": "GearGirl",
    "url": "https://github.com/TenmaSaito/GearGirl"
  },
  {
    "label": "XmaStealth",
    "url": "https://github.com/TenmaSaito/XmaStealth"
  }
];
