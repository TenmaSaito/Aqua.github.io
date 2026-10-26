# ゲーム制作ポートフォリオ

GitHub Pagesで配信できる、ビルド不要の静的サイトです。外部ライブラリー・外部フォント・アクセス解析は使用していません。

## 確認する

`index.html` をブラウザーで開きます。Node.jsがある場合は、このフォルダーで `node preview.cjs` を実行し、表示されたURLから確認できます。

`preview.html` はCSSと掲載データを内蔵した、デザイン相談用のスナップショットです。ダブルクリックしてブラウザーで確認できます。元のファイルを変更した後は `node make-preview.cjs` で再生成してください。画像・動画を追加した場合は `assets` フォルダーも隣に置いてください。日常の編集確認には、常に最新のファイルを読み込む `index.html` を使えます。

## 掲載内容を更新する

編集するのは基本的に **content.js** だけです。現在はすべてサンプルです。

| 項目 | 編集箇所 |
| --- | --- |
| 名前・学校・自己紹介 | profile |
| 作品 | games |
| 技術・アプリ・使用歴・できること | skillGroups の items |
| 参加・出展イベント | events |

配列の既存の `{ ... }` をコピーして追加すると、表示件数も自動的に増えます。作品カテゴリの絞り込みボタンも自動で生成されます。表示順は記入順です。不要な項目は削除でき、作品やイベントは `[]` にすると準備中の表示になります。

- 文字列は `"..."` で囲み、項目の間にカンマを入れます。文章中の改行は `\n`、ダブルクォートは `\"` と書きます。
- 画像は `assets` に入れ、作品の `image` に `assets/画像名.webp` などの相対パス、`imageAlt` に画像の説明を書きます。先頭に `/` を付けないことでリポジトリ名付きのURLにも対応します。
- 作品の `links` やプロフィールの `links` に `{ label: "GitHub", url: "https://github.com/ユーザー名" }` のような項目を追加できます。リンクがない場合は `[]` にします。
- 複数のスクリーンショットは作品の `screenshots` に `{ src: "assets/scene-01.webp", caption: "ステージ画面" }` を追加します。空の場合はメイン画像が作品詳細にも表示されます。
- プレイ動画は `video: { src: "assets/play.mp4", youtubeId: "", poster: "assets/cover.webp", caption: "操作の紹介" }` で設定します。YouTubeなら `src` を空にして `youtubeId` にURLの `v=` に続く11文字のIDを記入します。動画は自動再生しません。未設定なら公開モードでは動画欄を表示しません。サンプルモードでは配置予定の枠が表示されます。
- `theme` は画像未設定時の色で、`mint`、`peach`、`lavender` を指定できます。
- 実際の情報に差し替えたら `sampleMode: false` にしてサンプル表示の案内を消します。これはサンプルデータ自体を削除する設定ではありません。
- レイアウトは `style.css`、ダーク系の配色・演出は `theme.css`、表示処理は `app.js` で変更できます。

## GitHub Pagesへ公開する

指定の公開先: `https://github.com/TenmaSaito/TenmaSaito.github.io`
公開先は `https://www.aquart.is-a.dev/` です。`CNAME` と GitHub Pages の Custom domain は `www.aquart.is-a.dev` に統一します。DNS check はユーザー側で通過済みです。HTTPSとサイトの公開状態は別途確認してください。

1. 指定の既存リポジトリ `TenmaSaito/TenmaSaito.github.io` を開きます。
2. このフォルダーの**中身**をリポジトリのルートにアップロードします。`index.html` がルートにあることを確認してください。`preview.cjs` と README は公開動作には不要です。
3. リポジトリの Settings → Pages で、Source を Deploy from a branch、Branch を main、フォルダーを /(root) に設定して保存します。
4. Custom domain が `www.aquart.is-a.dev` であることを確認し、公開後に `https://www.aquart.is-a.dev/` を開きます。
5. 更新時は `content.js` や画像を変更してコミットします。反映には時間がかかる場合があります。

GitHubの公式手順: https://docs.github.com/ja/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 現在の段階

デザイン相談を受け、ダーク系の「NIGHT ARCADE」デザインへ変更しました。掲載情報はサンプルです。公開状態はGitHub Pagesのデプロイ結果で確認してください。実名・学校名・作品画像・実際の技術や活動を差し替えて仕上げます。
