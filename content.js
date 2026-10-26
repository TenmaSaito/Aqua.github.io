// 掲載内容の編集用ファイルです。新しい作品・技術・イベントは配列へ追加します。
window.PORTFOLIO = {
  sampleMode: false,
  site: { favicon: "assets/favicon.svg" },
  presentation: {
    splash: { enabled: true, title: "AQUART", subtitle: "IDEAS FLOW INTO PLAY.", image: "", durationMs: 1600 },
    reveal: true
  },
  profile: {
    name: "齊藤 天眞", nameReading: "さいとう てんま",
    school: "専門学校北海道サイバークリエイターズ大学校",
    course: "ゲームクリエイター学科", specialization: "ゲームプログラマ専攻",
    headline: "心が動く、\n遊びをつくる。",
    intro: "ゲームプログラマを専攻する齊藤天眞のポートフォリオ。制作したゲームや、技術・イベントでの活動を紹介します。",
    bio: "専門学校北海道サイバークリエイターズ大学校で、ゲームプログラマを専攻しています。C/C++・C#を使用し、これまでに約7本のゲームを制作。ゲームジャムへの参加やイベントでの出展も行っています。",
    interests: "",
    email: "251315@st.yoshi-g.ac.jp",
    links: [
      { label: "GitHub", url: "https://github.com/TenmaSaito", icon: "" }
    ]
  },
  worksIntro: {
    countLabel: "約7本のゲームを制作",
    description: "各作品の紹介・スクリーンショット・プレイ動画は、順次公開予定です。"
  },
  // 作品の追加例はREADMEの「作品を追加する」を参照してください。
  games: [],
  skillGroups: [
    { title: "プログラミング言語", subtitle: "LANGUAGES", items: [
      { name: "C / C++", experience: "1年半", description: "", projects: "" },
      { name: "C#", experience: "1年", description: "", projects: "" }
    ] }
  ],
  // date に参加年や日付、description に展示した作品などを追記できます。
  events: [
    { date: "", title: "SAPPORO GAME ODYSSAY", type: "出展", description: "", url: "" },
    { date: "", title: "SAPPORO GAME CAMP", type: "参加", description: "Game Jam", url: "" },
    { date: "", title: "Global Game Jam", type: "参加", description: "", url: "" }
  ]
};
