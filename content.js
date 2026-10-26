// このファイルの内容を編集するだけで、サイトの掲載情報を更新できます。
// 下記はすべて記入例です。自分の情報に置き換えてから sampleMode を false にします。
window.PORTFOLIO = {
  sampleMode: true,
  presentation: {
    splash: { enabled: true, title: "AQUART", subtitle: "IDEAS FLOW INTO PLAY.", image: "", durationMs: 1600 },
    // image に assets/splash.webp 等を指定可能。空なら水滴アニメーションを表示。
    reveal: true
  },
  profile: {
    name: "あなたの名前", school: "学校名 / 学科・コース名",
    headline: "心が動く、\n遊びをつくる。",
    intro: "ゲーム制作の作品と、その裏側にある技術や挑戦をまとめたポートフォリオです。",
    bio: "ここに自己紹介を記入します。ゲーム制作を始めたきっかけ、得意なこと、大切にしていること、これから挑戦したいことなどを紹介できます。",
    interests: "興味のある分野を記入",
    email: "", // 公開する連絡用メールアドレス。空の場合は未設定と表示。
    links: [
      { label: "GitHub", url: "https://github.com/TenmaSaito", icon: "" }
      // icon: "assets/github-icon.png" のように自分のアイコン画像を指定できます。
    ]
  },
  games: [
    {
      title: "ゲームタイトル A", subtitle: "探索アクション / 記入例", category: "個人制作", year: "20XX", theme: "mint",
      image: "", imageAlt: "", // 例: assets/my-game.webp
      screenshots: [], // 例: { src: "assets/scene-01.webp", caption: "ステージ画面" }
      video: { src: "", youtubeId: "", poster: "", caption: "" }, // src: assets/play.mp4 または youtubeId: 11文字の動画ID
      description: "どんな体験ができるゲームか、作品の魅力を短く紹介します。",
      tools: ["Unity", "C#"], role: "企画・プログラミング", period: "制作期間を記入", team: "1名（記入例）",
      detail: "操作方法やゲームの目的、制作の背景などを記入します。",
      highlights: ["自分が担当した実装や工夫を記入", "制作中に解決した課題を記入"],
      links: [] // 例: { label: "プレイする", url: "https://example.com" }
    },
    {
      title: "ゲームタイトル B", subtitle: "パズル / 記入例", category: "チーム制作", year: "20XX", theme: "peach",
      image: "", imageAlt: "", description: "ゲームのルールやチーム内で担当したことを紹介します。",
      tools: ["Unreal Engine", "Blueprint"], role: "担当箇所を記入", period: "制作期間を記入", team: "人数を記入",
      detail: "チームで目指した体験や、自分の貢献を具体的に紹介できます。",
      highlights: ["担当した機能と、制作で工夫した点を記入"], links: []
    },
    {
      title: "ゲームタイトル C", subtitle: "ミニゲーム / 記入例", category: "個人制作", year: "20XX", theme: "lavender",
      image: "", imageAlt: "", description: "小さなプロトタイプや、学習のための制作も掲載できます。",
      tools: ["JavaScript", "HTML / CSS"], role: "企画・実装", period: "制作期間を記入", team: "1名（記入例）",
      detail: "試した技術や、プロトタイプから得た学びを記入します。", highlights: ["制作の狙いと学んだことを記入"], links: []
    }
  ],
  skillGroups: [
    { title: "言語", subtitle: "LANGUAGES", items: [
      { name: "C#", experience: "使用歴を記入", description: "記入例：Unityでのキャラクター制御、UI実装。", projects: "使用作品：ゲームタイトル A" },
      { name: "JavaScript", experience: "使用歴を記入", description: "記入例：ブラウザーで動くゲームの実装。", projects: "使用作品：ゲームタイトル C" }
    ] },
    { title: "ゲームエンジン", subtitle: "GAME ENGINES", items: [
      { name: "Unity", experience: "使用歴・バージョンを記入", description: "記入例：2Dゲーム制作、シーン管理、アニメーション。", projects: "使用作品：ゲームタイトル A" },
      { name: "Unreal Engine", experience: "使用歴・バージョンを記入", description: "記入例：Blueprintによるプロトタイピング。", projects: "使用作品：ゲームタイトル B" }
    ] },
    { title: "制作・開発ツール", subtitle: "CREATIVE TOOLS", items: [
      { name: "Blender", experience: "使用歴を記入", description: "記入例：小物のモデリング、簡単なマテリアル設定。", projects: "使用した制作物を記入" },
      { name: "Git / GitHub", experience: "使用歴を記入", description: "記入例：履歴管理、ブランチを使った共同制作。", projects: "使用したプロジェクトを記入" }
    ] }
  ],
  events: [
    { date: "20XX.XX", title: "出展イベント名", type: "出展", description: "展示した作品、担当したこと、来場者から得た学びなどを記入。", url: "" },
    { date: "20XX.XX", title: "ゲームジャム・参加イベント名", type: "参加", description: "テーマ、制作内容、チームでの役割などを記入。", url: "" }
  ]
};
