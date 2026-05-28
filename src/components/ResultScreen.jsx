import styles from './ResultScreen.module.css'
import { HEURISTICS } from '../data/questions'

const heuristicName = (id) => {
  const h = HEURISTICS.find(h => h.id === id)
  return h ? `原則 ${id}：${h.name}` : `原則 ${id}`
}

const RANKS = [
  { min: 10, title: 'ヒューリスティクス・マスター', subtitle: 'ニールセンの再来。完璧です。' },
  { min: 7, title: '一人前UXデザイナー', subtitle: 'しっかり理解できています！' },
  { min: 4, title: 'デザイン見習い', subtitle: 'もう少し復習しましょう。' },
  { min: 0, title: 'ユーザーを迷わせる悪魔', subtitle: 'ヒューリスティクスを学び直そう。' },
]

function getRank(score) {
  return RANKS.find(r => score >= r.min)
}

export default function ResultScreen({ answers, onRetry }) {
  const score = answers.filter(a => a.isCorrect).length
  const total = answers.length
  const rank = getRank(score)
  const wrong = answers.filter(a => !a.isCorrect)

  return (
    <div className={styles.container}>
      <div className={styles.scoreSection}>
        <p className={styles.scoreLabel}>スコア</p>
        <div className={styles.scoreDisplay}>
          <span className={styles.scoreNum}>{score}</span>
          <span className={styles.scoreTotal}>/ {total}</span>
        </div>
        <div className={styles.rankTitle}>{rank.title}</div>
        <p className={styles.rankSubtitle}>{rank.subtitle}</p>
      </div>

      <section className={styles.reviewSection}>
        <h2 className={styles.reviewHeading}>回答一覧（{answers.length}問）</h2>
        <div className={styles.reviewList}>
          {answers.map((a, i) => (
            <div key={i} className={styles.reviewItem}>
              <div className={styles.reviewHeader}>
                <span className={a.isCorrect ? styles.correctBadge : styles.incorrectBadge}>
                  {a.isCorrect ? '正解' : '不正解'}
                </span>
                <span className={styles.correctPrinciple}>{heuristicName(a.question.correct_answer)}</span>
              </div>
              <p className={styles.yourAnswer}>あなたの回答：{heuristicName(a.selected)}</p>
              <p className={styles.reviewSituation}>{a.question.situation}</p>
              <p className={styles.reviewExplanation}>{a.question.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.retryWrap}>
        <button className={styles.retryBtn} onClick={onRetry}>
          もう一度挑戦する
        </button>
      </div>
    </div>
  )
}
