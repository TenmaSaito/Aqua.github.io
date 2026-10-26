// 掲載内容の編集用ファイルです。新しい作品・技術・イベントは配列へ追加します。
window.PORTFOLIO = {
  sampleMode: false,
  site: { favicon: "assets/favicon.svg" },
  presentation: {
    splash: { enabled: true, title: "AQUART", subtitle: "IDEAS FLOW INTO PLAY.", image: "", durationMs: 2200 },
    reveal: true
  },
  profile: {
    name: "齊藤 天眞", nameReading: "さいとう てんま",
    school: "専門学校北海道サイバークリエイターズ大学校",
    course: "ゲームクリエイター学科", specialization: "ゲームプログラマ専攻",
    graduation: "", // 例: "2028年3月卒業予定"。空なら非表示。
    headline: "心が動く、\n遊びをつくる。",
    intro: "ゲームプログラマを専攻する齊藤天眞のポートフォリオ。制作したゲームや、技術・イベントでの活動を紹介します。",
    bio: "専門学校北海道サイバークリエイターズ大学校で、ゲームプログラマを専攻しています。C/C++・C#を使用し、これまでに約10本のゲームを制作。ゲームジャムへの参加やイベントでの出展も行っています。",
    interests: "",
    email: "251315@st.yoshi-g.ac.jp",
    links: [
      { label: "GitHub", url: "https://github.com/TenmaSaito", icon: "" },
      { label: "X", url: "", icon: "" },
      { label: "Steam", url: "", icon: "" }
    ]
  },
  worksIntro: {
    countLabel: "約10本のゲームを制作",
    description: "作品の詳細から、プレイ動画と作品データをご覧いただけます。"
  },
  // 作品の追加例はREADMEの「作品を追加する」を参照してください。
  games: [
    {
      title: "クリスマステルス大作戦", subtitle: "初の3Dゲーム作品", category: "3Dゲーム", year: "2025", theme: "mint",
      image: "assets/works/xmas-stealth-01.png", imageAlt: "クリスマステルス大作戦のタイトル画面",
      description: "C言語とDirectX9で制作した、初の3Dゲーム作品。",
      tools: ["C", "DirectX9"], role: "", period: "2025/11/6 ～ 2025/12/24", team: "",
      detail: "クリスマスをモチーフにした3Dゲームです。公開プレイ動画で、チュートリアルやゲーム画面をご覧いただけます。",
      highlights: [], screenshots: [
        { src: "assets/works/xmas-stealth-01.png", caption: "タイトル画面（プレイ動画より）" },
        { src: "assets/works/xmas-stealth.png", caption: "チュートリアルのゲーム画面（プレイ動画より）" },
        { src: "assets/works/xmas-stealth-02.png", caption: "基本操作のチュートリアル（プレイ動画より）" },
        { src: "assets/works/xmas-stealth-03.png", caption: "オーナメントとツリー（プレイ動画より）" },
        { src: "assets/works/xmas-stealth-04.png", caption: "ゲーム本編（プレイ動画より）" },
        { src: "assets/works/xmas-stealth-05.png", caption: "結果画面（プレイ動画より）" }
      ],
      video: { youtubeId: "SUQJOdHtpqg", caption: "クリスマステルス大作戦 / プレイ動画" },
      links: [
        { label: "作品データ", url: "https://drive.google.com/drive/folders/1jZpkJw0JxEHW-CpLnkCS39s9V9Ul3zL2" },
        { label: "YouTubeで見る", url: "https://youtu.be/SUQJOdHtpqg" }
      ]
    },
    {
      title: "見習い地図士と不思議な世界", subtitle: "2Dゲーム作品", category: "2Dゲーム", year: "2025", theme: "lavender",
      image: "https://i.ytimg.com/vi/9B82_kTPxxc/hqdefault.jpg", imageAlt: "見習い地図士と不思議な世界のプレイ動画サムネイル",
      description: "C言語とDirectX9を使用して制作した2Dゲーム作品。",
      tools: ["C", "DirectX9"], role: "", period: "2025/6/30 ～ 2025/9/22", team: "",
      detail: "2025年6月から9月にかけて制作した2Dゲーム作品です。ゲームの様子は、プレイ動画で紹介しています。",
      highlights: [], screenshots: [],
      video: { youtubeId: "9B82_kTPxxc", caption: "見習い地図士と不思議な世界 / プレイ動画" },
      links: [
        { label: "作品データ", url: "https://drive.google.com/drive/folders/1tuWMl62xEX0VqR3xQqZHnkmMcXe7kfKW" },
        { label: "YouTubeで見る", url: "https://youtu.be/9B82_kTPxxc" }
      ]
    },
    {
      title: "十六夜コレクター", subtitle: "2作目の2Dゲーム作品", category: "2Dゲーム", year: "2025", theme: "lavender",
      image: "https://i.ytimg.com/vi/PDFSXxMC6z4/hqdefault.jpg", imageAlt: "十六夜コレクターのプレイ動画サムネイル",
      description: "C言語とDirectX9で制作した、2Dゲーム作品の2作目。",
      tools: ["C", "DirectX9"], role: "", period: "2025/10/2 ～ 2025/10/31", team: "",
      detail: "2025年10月に制作した2Dゲーム作品です。プレイ動画と作品データを公開しています。",
      highlights: [], screenshots: [],
      video: { youtubeId: "PDFSXxMC6z4", caption: "十六夜コレクター / プレイ動画" },
      links: [
        { label: "作品データ", url: "https://drive.google.com/drive/folders/1s1luAQwW1Wly6N-Ra9-RZrSyvNf_xYp5" },
        { label: "YouTubeで見る", url: "https://youtu.be/PDFSXxMC6z4" }
      ]
    },
    {
      title: "撥条少女", subtitle: "5人チームでの3Dゲーム制作", category: "3Dゲーム", year: "2025", theme: "peach",
      image: "https://i.ytimg.com/vi/p8u7Jz-R7Iw/hqdefault.jpg", imageAlt: "撥条少女のプレイ動画サムネイル",
      description: "5人チームで取り組んだ、初の3Dチーム制作作品。",
      tools: ["C", "DirectX9"], role: "", period: "2025/1/15 ～ 2025/3/19", team: "5名",
      detail: "C言語とDirectX9を使用した3Dゲームです。プレイ動画では、アームやギミックが登場するゲーム画面をご覧いただけます。",
      highlights: [], screenshots: [],
      video: { youtubeId: "p8u7Jz-R7Iw", caption: "撥条少女 / プレイ動画" },
      links: [
        { label: "作品データ", url: "https://drive.google.com/drive/folders/17Ku8LNMrUj245HuN-RsVx44b2mPjsanU" },
        { label: "YouTubeで見る", url: "https://youtu.be/p8u7Jz-R7Iw" }
      ]
    },
    {
      title: "進め！きんにく！ごりキャット君！", subtitle: "3人チームでの2Dゲーム制作", category: "2Dゲーム", year: "2025", theme: "peach",
      image: "https://i.ytimg.com/vi/M9hjYlRG0qI/hqdefault.jpg", imageAlt: "進め！きんにく！ごりキャット君！のプレイ動画サムネイル",
      description: "3人チームで制作した、C言語・DirectX9の2Dゲーム。",
      tools: ["C", "DirectX9"], role: "", period: "2025/3/24 ～ 2025/3/26", team: "3名",
      detail: "3人チームで制作した2Dゲームです。プレイ動画では、プロテインで猫を強化する様子を紹介しています。",
      highlights: [], screenshots: [],
      video: { youtubeId: "M9hjYlRG0qI", caption: "進め！きんにく！ごりキャット君！ / プレイ動画" },
      links: [
        { label: "作品データ", url: "https://drive.google.com/drive/folders/1LGjK1nSxxiqTdOPpTo0CNG_2W1_yYju_" },
        { label: "YouTubeで見る", url: "https://youtu.be/M9hjYlRG0qI" }
      ]
    },
    {
      title: "現実逃避だ！タケル君！", subtitle: "初のC++による2Dゲーム", category: "2Dゲーム", year: "2025", theme: "mint",
      image: "https://i.ytimg.com/vi/GLYZmwaaMjU/hqdefault.jpg", imageAlt: "現実逃避だ！タケル君！のプレイ動画サムネイル",
      description: "初めてC++を使って制作した2Dゲーム。DirectX9を使用。",
      tools: ["C++", "DirectX9"], role: "", period: "2025/5/25 ～ 2025/5/28", team: "",
      detail: "2025年5月に制作した、初めてC++を使用した2Dゲーム作品です。ゲーム画面と動きをプレイ動画で紹介しています。",
      highlights: [], screenshots: [],
      video: { youtubeId: "GLYZmwaaMjU", caption: "現実逃避だ！タケル君！ / プレイ動画" },
      links: [
        { label: "作品データ", url: "https://drive.google.com/drive/folders/1l29CW07WhpXP6jHDhkMvsW7pNBgtpjLI" },
        { label: "YouTubeで見る", url: "https://youtu.be/GLYZmwaaMjU" }
      ]
    }
  ],
  sourceProjects: [
    { label: "ConnectingVolteccer", url: "https://github.com/TenmaSaito/ConnectingVolteccer" },
    { label: "cpp_TKG", url: "https://github.com/TenmaSaito/cpp_TKG" },
    { label: "2DActionGame", url: "https://github.com/TenmaSaito/2DActionGame" },
    { label: "PunchingHomerun", url: "https://github.com/TenmaSaito/PunchingHomerun" },
    { label: "GearGirl", url: "https://github.com/TenmaSaito/GearGirl" },
    { label: "XmaStealth", url: "https://github.com/TenmaSaito/XmaStealth" }
  ],
  internships: [
    {
      company: "バンダイナムコスタジオ", period: "参加期間：10日間",
      title: "C++ / WebAssembly / Android",
      description: "C++で書いたコードをWebAssembly化し、ブラウザーで動作するよう制作しました。",
      role: "基底クラスの作成、Androidへの移植。",
      learnings: [], links: []
    }
  ],
  skillGroups: [
    { title: "プログラミング言語", subtitle: "LANGUAGES", items: [
      { name: "C / C++", experience: "1年半", description: "使用IDE : Visual Studio2019, VS Code", projects: "DirectX9", languages: ["C", "C++"] },
      { name: "C#", experience: "1年", description: "使用IDE : Visual Studio2019", projects: "Unity", languages: ["C#"] }
    ] }
  ],
  // date に参加年や日付、description に展示した作品などを追記できます。
  events: [
      { date: "", title: "SAPPORO GAME ODYSSAY", type: "出展", description: "", url: "https://www.sapporo-game-odyssey.jp/" },
      { date: "", title: "SAPPORO GAME CAMP", type: "参加", description: "2026年度Game Jamに参加。Unity, C#を用いて2日でゲームを作成。", url: "https://sapporo-game-camp.com/2026/" },
      { date: "", title: "Global Game Jam", type: "参加", description: "", url: "https://www.infiniteloop.co.jp/pr-blog/2026/01/global-game-jam-sapporo-2026/" }
  ]
};
