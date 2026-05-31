# ヒューリスティクス10本ノック

ニールセンの10のユーザビリティ・ヒューリスティクスを学ぶWebクイズアプリ。

実際のUIシナリオ（Good / Bad事例）を読んで、どの原則に該当・違反しているかを答える。

## スクリーン構成

1. **トップ画面** — タイトルとモード選択（通常 / 上級）
2. **クイズ画面** — 全10問（Good 5問 / Bad 5問をランダム出題）
3. **結果画面** — スコア・称号・全問の回答一覧

## モード

### 通常モード
- 1問につき1つの原則を選択
- 問題プール：`ALL_QUESTIONS`（ID: 1〜20、Good 10問 / Bad 10問）
- セッションごとにGood・Badそれぞれ5問をランダム抽出

### 上級モード
- 1問につき**2つ**の原則を同時に選択（両方正解で○）
- 問題プール：`ADVANCED_QUESTIONS`（ID: 101〜120、Good 10問 / Bad 10問）
- セッションごとにGood・Badそれぞれ5問をランダム抽出
- 結果画面に「上級モード」タグを表示

## 技術スタック

- React 18
- Vite 5
- CSS Modules

## ローカル起動

```bash
npm install
npm run dev
```

`http://localhost:5173` で確認。

## ビルド

```bash
npm run build
```

`dist/` フォルダが生成される。Vercel / Netlify にそのままデプロイ可能。

## 問題データの追加・編集

`src/data/questions.js` に問題を追加する。

### 通常問題（`ALL_QUESTIONS` 配列）

```js
{
  id: 21,               // 一意のID（1〜99）
  type: 'good',         // 'good' or 'bad'
  situation: '...',     // UIのシナリオ文
  question: '...',      // 問い文
  correct_answer: 3,    // 正解の原則番号（1〜10）
  explanation: '...',   // 回答後に表示する解説
}
```

### 上級問題（`ADVANCED_QUESTIONS` 配列）

```js
{
  id: 121,              // 一意のID（101〜）
  level: 'advanced',    // 必須
  type: 'good',         // 'good' or 'bad'
  situation: '...',     // UIのシナリオ文
  question: '...',      // 問い文（「どの2つの原則を…」形式）
  correct_answers: [1, 5], // 正解の原則番号を2つ（順不同）
  explanation: '...',   // 回答後に表示する解説
}
```

現在の収録数：通常 20問（Good 10 / Bad 10）、上級 20問（Good 10 / Bad 10）

## ニールセンの10原則

出典: [10 Usability Heuristics for User Interface Design — Nielsen Norman Group](https://www.nngroup.com/articles/ten-usability-heuristics/)

| # | 原則名 |
|---|--------|
| 1 | システム状態の視認性 |
| 2 | システムと現実世界の対応 |
| 3 | ユーザーの自由と制御 |
| 4 | 一貫性と標準化 |
| 5 | エラーの予防 |
| 6 | 記憶よりも認識 |
| 7 | 柔軟性と効率性 |
| 8 | 美的・最小限のデザイン |
| 9 | エラーからの回復支援 |
| 10 | ヘルプとドキュメント |
