// ============================================================
// 作品データ
// 作品の一覧データです。作品ごとにまとまっているので、直したい作品の見出しを探してください。
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
window.AQUART_CONTENT.worksIntro = {
  "countLabel": "約10本のゲームを制作",
  "description": "作品の詳細から、プレイ動画と作品データをご覧いただけます。"
};

window.AQUART_CONTENT = window.AQUART_CONTENT || {};
window.AQUART_CONTENT.games = [

  // ――――――――――――――――――――――――――――
  // 作品：電流コネクション！
  // ――――――――――――――――――――――――――――
  {
    "id": "denryu-connection",
    "relatedEventId": "",
    "featured": true,
    "title": "電流コネクション！",
    "subtitle": "電線をつなげて星を明るくする3Dパズルアクション",
    "category": "3Dゲーム",
    "year": "",
    "image": "assets/work-denryu.jpg",
    "imageAlt": "電流コネクション！のタイトル画面",
    "description": "電線をつなげて星を明るくする3Dパズルアクション。球体上のステージで電線をつなぎ、星に明かりを灯します。",
    "tools": [],
    "period": "3ヶ月",
    "team": "",
    "detail": "紹介PDFより：電線をつなげて星を明るくする3Dパズルアクション（プレイ人数：1人、制作期間：3ヶ月、制作者：齊藤天眞）。工夫した点として、球体上のステージ設計や判定、プレイヤーとUIの合成、オブジェクト指向を意識したコーディングが挙げられています。詳しい遊び方やアピールポイントは、リンク先の紹介PDF・遊び方PDFをご覧ください。",
    "screenshots": [
      {
        "src": "assets/denryu-shot-01.jpg",
        "caption": "タイトル画面"
      },
      {
        "src": "assets/denryu-shot-02.jpg",
        "caption": "チュートリアル"
      },
      {
        "src": "assets/denryu-shot-03.jpg",
        "caption": "ゲーム画面（移動）"
      },
      {
        "src": "assets/denryu-shot-04.jpg",
        "caption": "ゲーム画面（電柱に乗る）"
      },
      {
        "src": "assets/denryu-shot-05.jpg",
        "caption": "ゲーム画面（電線をつなぐ）"
      },
      {
        "src": "assets/denryu-shot-06.jpg",
        "caption": "ランキング"
      },
      {
        "src": "assets/denryu-shot-07.jpg",
        "caption": "結果画面"
      }
    ],
    "video": {
      "youtubeId": "fg_TAnzG8N4",
      "thumbnail": "https://i.ytimg.com/vi/fg_TAnzG8N4/hqdefault.jpg",
      "caption": "電流コネクション！ / プレイ動画（PV）"
    },
    "links": [
      {
        "label": "作品データ",
        "url": "https://drive.google.com/drive/folders/1QovomTaEMzcXYkYwVFnusqvgCjHzhZUz"
      },
      {
        "label": "紹介PDF",
        "url": "https://drive.google.com/file/d/1L8gkaxdmC6nFSmHpWqf1N9UjqsFWPlAb/view"
      },
      {
        "label": "遊び方PDF",
        "url": "https://drive.google.com/file/d/108es4HySybvoN70PYY9zWC_43qJhRGgz/view"
      },
      {
        "label": "YouTubeで見る",
        "url": "https://youtu.be/fg_TAnzG8N4"
      }
    ]
  },

  // ――――――――――――――――――――――――――――
  // 作品：クリスマステルス大作戦
  // ――――――――――――――――――――――――――――
  {
    "id": "xmas-stealth",
    "relatedEventId": "",
    "title": "クリスマステルス大作戦",
    "subtitle": "初の3Dゲーム作品",
    "category": "3Dゲーム",
    "year": "2025",
    "image": "assets/work-xmas.jpg",
    "imageAlt": "クリスマステルス大作戦のプレイ動画サムネイル",
    "description": "C言語とDirectX9で制作した、初の3Dゲーム作品。",
    "tools": [
      "C",
      "DirectX9"
    ],
    "period": "2025/11/6 ～ 2025/12/24",
    "team": "",
    "detail": "クリスマスをモチーフにした3Dゲームです。公開プレイ動画で、チュートリアルやゲーム画面をご覧いただけます。",
    "screenshots": [
      {
        "src": "assets/xmas-shot-01.jpg",
        "caption": "タイトル画面（プレイ動画より）"
      },
      {
        "src": "assets/xmas-shot-02.jpg",
        "caption": "チュートリアルのゲーム画面（プレイ動画より）"
      },
      {
        "src": "assets/xmas-shot-03.jpg",
        "caption": "基本操作のチュートリアル（プレイ動画より）"
      },
      {
        "src": "assets/xmas-shot-04.jpg",
        "caption": "オーナメントとツリー（プレイ動画より）"
      },
      {
        "src": "assets/xmas-shot-05.jpg",
        "caption": "ゲーム本編（プレイ動画より）"
      },
      {
        "src": "assets/xmas-shot-06.jpg",
        "caption": "結果画面（プレイ動画より）"
      }
    ],
    "video": {
      "youtubeId": "SUQJOdHtpqg",
      "caption": "クリスマステルス大作戦 / プレイ動画"
    },
    "links": [
      {
        "label": "作品データ",
        "url": "https://drive.google.com/drive/folders/1jZpkJw0JxEHW-CpLnkCS39s9V9Ul3zL2"
      },
      {
        "label": "YouTubeで見る",
        "url": "https://youtu.be/SUQJOdHtpqg"
      }
    ]
  },

  // ――――――――――――――――――――――――――――
  // 作品：見習い地図士と不思議な世界
  // ――――――――――――――――――――――――――――
  {
    "id": "apprentice-mapmaker",
    "relatedEventId": "",
    "title": "見習い地図士と不思議な世界",
    "subtitle": "2Dゲーム作品",
    "category": "2Dゲーム",
    "year": "2025",
    "image": "assets/work-map.jpg",
    "imageAlt": "見習い地図士と不思議な世界のプレイ動画サムネイル",
    "description": "C言語とDirectX9を使用して制作した2Dゲーム作品。",
    "tools": [
      "C",
      "DirectX9"
    ],
    "period": "2025/6/30 ～ 2025/9/22",
    "team": "",
    "detail": "2025年6月から9月にかけて制作した2Dゲーム作品です。ゲームの様子は、プレイ動画で紹介しています。",
    "screenshots": [
      {
        "src": "assets/map-shot-01.jpg",
        "caption": "タイトル画面"
      },
      {
        "src": "assets/map-shot-02.jpg",
        "caption": "チュートリアル"
      },
      {
        "src": "assets/map-shot-03.jpg",
        "caption": "ゲーム画面1"
      },
      {
        "src": "assets/map-shot-04.jpg",
        "caption": "ゲーム画面2"
      },
      {
        "src": "assets/map-shot-05.jpg",
        "caption": "ランキング"
      },
      {
        "src": "assets/map-shot-06.jpg",
        "caption": "結果画面"
      }
    ],
    "video": {
      "youtubeId": "9B82_kTPxxc",
      "caption": "見習い地図士と不思議な世界 / プレイ動画"
    },
    "links": [
      {
        "label": "作品データ",
        "url": "https://drive.google.com/drive/folders/1tuWMl62xEX0VqR3xQqZHnkmMcXe7kfKW"
      },
      {
        "label": "YouTubeで見る",
        "url": "https://youtu.be/9B82_kTPxxc"
      }
    ]
  },

  // ――――――――――――――――――――――――――――
  // 作品：十六夜コレクター
  // ――――――――――――――――――――――――――――
  {
    "id": "izayoi-collector",
    "relatedEventId": "",
    "title": "十六夜コレクター",
    "subtitle": "2作目の2Dゲーム作品",
    "category": "2Dゲーム",
    "year": "2025",
    "image": "assets/work-izayoi.jpg",
    "imageAlt": "十六夜コレクターのプレイ動画サムネイル",
    "description": "C言語とDirectX9で制作した、2Dゲーム作品の2作目。",
    "tools": [
      "C",
      "DirectX9"
    ],
    "period": "2025/10/2 ～ 2025/10/31",
    "team": "",
    "detail": "2025年10月に制作した2Dゲーム作品です。プレイ動画と作品データを公開しています。",
    "screenshots": [
      {
        "src": "assets/izayoi-shot-01.jpg",
        "caption": "スクリーンショット1"
      },
      {
        "src": "assets/izayoi-shot-02.jpg",
        "caption": "スクリーンショット2"
      },
      {
        "src": "assets/izayoi-shot-03.jpg",
        "caption": "スクリーンショット3"
      },
      {
        "src": "assets/izayoi-shot-04.jpg",
        "caption": "スクリーンショット4"
      },
      {
        "src": "assets/izayoi-shot-05.jpg",
        "caption": "スクリーンショット5"
      }
    ],
    "video": {
      "youtubeId": "PDFSXxMC6z4",
      "caption": "十六夜コレクター / プレイ動画"
    },
    "links": [
      {
        "label": "作品データ",
        "url": "https://drive.google.com/drive/folders/1s1luAQwW1Wly6N-Ra9-RZrSyvNf_xYp5"
      },
      {
        "label": "YouTubeで見る",
        "url": "https://youtu.be/PDFSXxMC6z4"
      }
    ]
  },

  // ――――――――――――――――――――――――――――
  // 作品：撥条少女
  // ――――――――――――――――――――――――――――
  {
    "id": "gear-girl",
    "relatedEventId": "",
    "title": "撥条少女",
    "subtitle": "5人チームでの3Dゲーム制作",
    "category": "3Dゲーム",
    "year": "2025",
    "image": "assets/work-geargirl.jpg",
    "imageAlt": "撥条少女のプレイ動画サムネイル",
    "description": "5人チームで取り組んだ、初の3Dチーム制作作品。",
    "tools": [
      "C",
      "DirectX9"
    ],
    "period": "2025/1/15 ～ 2025/3/19",
    "team": "5名",
    "detail": "C言語とDirectX9を使用した3Dゲームです。プレイ動画では、アームやギミックが登場するゲーム画面をご覧いただけます。",
    "screenshots": [
      {
        "src": "assets/gear-shot-01.jpg",
        "caption": "タイトル画面"
      },
      {
        "src": "assets/gear-shot-02.jpg",
        "caption": "チュートリアル"
      },
      {
        "src": "assets/gear-shot-03.jpg",
        "caption": "アイテム発見"
      },
      {
        "src": "assets/gear-shot-04.jpg",
        "caption": "アイテム取得"
      },
      {
        "src": "assets/gear-shot-05.jpg",
        "caption": "アイテム配置"
      },
      {
        "src": "assets/gear-shot-06.jpg",
        "caption": "会話シーン"
      },
      {
        "src": "assets/gear-shot-07.jpg",
        "caption": "投げるアクション"
      },
      {
        "src": "assets/gear-shot-08.jpg",
        "caption": "エリア表示"
      },
      {
        "src": "assets/gear-shot-09.jpg",
        "caption": "2Pプレイ"
      },
      {
        "src": "assets/gear-shot-10.jpg",
        "caption": "ランキング"
      }
    ],
    "video": {
      "youtubeId": "p8u7Jz-R7Iw",
      "caption": "撥条少女 / プレイ動画"
    },
    "links": [
      {
        "label": "作品データ",
        "url": "https://drive.google.com/drive/folders/17Ku8LNMrUj245HuN-RsVx44b2mPjsanU"
      },
      {
        "label": "YouTubeで見る",
        "url": "https://youtu.be/p8u7Jz-R7Iw"
      }
    ]
  },

  // ――――――――――――――――――――――――――――
  // 作品：進め！きんにく！ごりキャット君！
  // ――――――――――――――――――――――――――――
  {
    "id": "goricat",
    "relatedEventId": "",
    "title": "進め！きんにく！ごりキャット君！",
    "subtitle": "3人チームでの2Dゲーム制作",
    "category": "2Dゲーム",
    "year": "2025",
    "image": "assets/work-goricat.jpg",
    "imageAlt": "進め！きんにく！ごりキャット君！のプレイ動画サムネイル",
    "description": "3人チームで制作した、C言語・DirectX9の2Dゲーム。",
    "tools": [
      "C",
      "DirectX9"
    ],
    "period": "2025/3/24 ～ 2025/3/26",
    "team": "3名",
    "detail": "3人チームで制作した2Dゲームです。プレイ動画では、プロテインで猫を強化する様子を紹介しています。",
    "screenshots": [
      {
        "src": "assets/goricat-shot-01.jpg",
        "caption": "スクリーンショット1"
      },
      {
        "src": "assets/goricat-shot-02.jpg",
        "caption": "スクリーンショット2"
      },
      {
        "src": "assets/goricat-shot-03.jpg",
        "caption": "スクリーンショット3"
      },
      {
        "src": "assets/goricat-shot-04.jpg",
        "caption": "スクリーンショット4"
      },
      {
        "src": "assets/goricat-shot-05.jpg",
        "caption": "スクリーンショット5"
      },
      {
        "src": "assets/goricat-shot-06.jpg",
        "caption": "スクリーンショット6"
      }
    ],
    "video": {
      "youtubeId": "M9hjYlRG0qI",
      "caption": "進め！きんにく！ごりキャット君！ / プレイ動画"
    },
    "links": [
      {
        "label": "作品データ",
        "url": "https://drive.google.com/drive/folders/1LGjK1nSxxiqTdOPpTo0CNG_2W1_yYju_"
      },
      {
        "label": "YouTubeで見る",
        "url": "https://youtu.be/M9hjYlRG0qI"
      }
    ]
  },

  // ――――――――――――――――――――――――――――
  // 作品：現実逃避だ！タケル君！
  // ――――――――――――――――――――――――――――
  {
    "id": "takeru",
    "relatedEventId": "sapporo-game-odyssey",
    "relatedEventLabel": "SAPPORO GAME ODYSSAY 出展",
    "title": "現実逃避だ！タケル君！",
    "subtitle": "初のC++による2Dゲーム",
    "category": "2Dゲーム",
    "year": "2025",
    "image": "assets/work-takeru.jpg",
    "imageAlt": "現実逃避だ！タケル君！のプレイ動画サムネイル",
    "description": "初めてC++を使って制作した2Dゲーム。DirectX9を使用。",
    "tools": [
      "C++",
      "DirectX9"
    ],
    "period": "2025/5/25 ～ 2025/5/28",
    "team": "",
    "detail": "2025年5月に制作した、初めてC++を使用した2Dゲーム作品です。ゲーム画面と動きをプレイ動画で紹介しています。",
    "screenshots": [
      {
        "src": "assets/takeru-shot-01.jpg",
        "caption": "スクリーンショット1"
      },
      {
        "src": "assets/takeru-shot-02.jpg",
        "caption": "スクリーンショット2"
      },
      {
        "src": "assets/takeru-shot-03.jpg",
        "caption": "スクリーンショット3"
      },
      {
        "src": "assets/takeru-shot-04.jpg",
        "caption": "スクリーンショット4"
      },
      {
        "src": "assets/takeru-shot-05.jpg",
        "caption": "スクリーンショット5"
      }
    ],
    "video": {
      "youtubeId": "GLYZmwaaMjU",
      "caption": "現実逃避だ！タケル君！ / プレイ動画"
    },
    "links": [
      {
        "label": "作品データ",
        "url": "https://drive.google.com/drive/folders/1l29CW07WhpXP6jHDhkMvsW7pNBgtpjLI"
      },
      {
        "label": "YouTubeで見る",
        "url": "https://youtu.be/GLYZmwaaMjU"
      }
    ]
  },

  // ――――――――――――――――――――――――――――
  // 作品：Game Jam 制作作品（タイトル未設定）
  // ――――――――――――――――――――――――――――
  {
    "id": "gamejam-work",
    "relatedEventId": "sapporo-game-camp",
    "relatedEventLabel": "Game Jam 制作",
    "pending": true,
    "pendingLabel": "詳細準備中",
    "title": "Game Jam 制作作品（タイトル未設定）",
    "subtitle": "SAPPORO GAME CAMP 2026 Game Jam 制作作品",
    "category": "Game Jam",
    "year": "2026",
    "image": "",
    "imageAlt": "Game Jam 制作作品（画像準備中）",
    "description": "2026年度のGame Jamで、Unity・C#を用いて2日で制作したゲーム。タイトル・画像・動画は準備中です。",
    "tools": [
      "Unity",
      "C#"
    ],
    "period": "2日間",
    "team": "",
    "detail": "SAPPORO GAME CAMP 2026年度のGame Jamに参加し、UnityとC#を用いて2日で制作したゲームです。作品タイトル・画像・プレイ動画などの詳細は準備中です。決まり次第、CONFIGのこの項目を書き換えて掲載します。",
    "screenshots": [],
    "video": null,
    "links": []
  }
];
