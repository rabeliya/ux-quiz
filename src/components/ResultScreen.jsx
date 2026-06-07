import styles from './ResultScreen.module.css'
import { HEURISTICS, getCorrectIds } from '../data/questions'

const heuristicName = (id) => {
  const h = HEURISTICS.find(h => h.id === id)
  return h ? `原則 ${id}：${h.name}` : `原則 ${id}`
}

// selected が単数（旧データ）でも配列でも安全に配列化する
const toIds = (value) => (Array.isArray(value) ? value : [value])

const heuristicNames = (ids) => toIds(ids).map(heuristicName).join(' ／ ')

const RANKS = [
  { min: 10, title: 'ヒューリスティクス・マスター', subtitle: 'ニールセンの再来。完璧です。' },
  { min: 7, title: '一人前UXデザイナー', subtitle: 'しっかり理解できています！' },
  { min: 4, title: 'デザイン見習い', subtitle: 'もう少し復習しましょう。' },
  { min: 0, title: 'ユーザーを迷わせる悪魔', subtitle: 'ヒューリスティクスを学び直そう。' },
]

function getRank(score) {
  return RANKS.find(r => score >= r.min)
}

export default function ResultScreen({ answers, level = 'normal', onRetry }) {
  const score = answers.filter(a => a.isCorrect).length
  const total = answers.length
  const rank = getRank(score)
  const isAdvanced = level === 'advanced'

  return (
    <>
    <div className={styles.decorLayer} aria-hidden="true">
        {/* 散りばめ図形 */}
        <svg
          className={styles.decorScatter}
          viewBox="0 0 600 900"
          preserveAspectRatio="xMidYMid slice"
          overflow="visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* クラスターA：右上の主役（大＋衛星2） */}
          <circle cx="486" cy="158" r="22" fill="#4338ca"/>
          <circle cx="534" cy="212" r="7"  fill="#4338ca"/>
          <circle cx="448" cy="216" r="5"  fill="#9C9EA4"/>
          {/* クラスターB：中左（中＋衛星） */}
          <circle cx="112" cy="346" r="14" fill="#9C9EA4"/>
          <circle cx="156" cy="392" r="6"  fill="#4338ca"/>
          {/* 単独アクセント：下中央、周囲に余白 */}
          <circle cx="322" cy="568" r="10" fill="#4338ca"/>
          {/* 端から覗く（左右非対称に2つ） */}
          <circle cx="600" cy="430" r="18" fill="#4338ca"/>
          <circle cx="0"   cy="628" r="16" fill="#9C9EA4"/>
        </svg>
        {/* グレー円 + 斜めライン */}
        <svg
          className={styles.decorLine}
          viewBox="0 0 600 550"
          fill="none"
          style={{ color: 'var(--color-primary)' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rGradGray" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0%" stopColor="#9C9EA4"/>
              <stop offset="100%" stopColor="#D0D2DA" stopOpacity="0.97"/>
            </linearGradient>
            <filter id="rGrain" x="0" y="0" width="600" height="550" filterUnits="userSpaceOnUse">
              <feImage href="/grain.png" x="0" y="0" width="512" height="512" result="g1"/>
              <feTile in="g1" result="tiled1"/>
              <feColorMatrix in="tiled1" type="saturate" values="0" result="grain1"/>
              <feImage href="/grain.png" x="256" y="256" width="512" height="512" result="g2"/>
              <feTile in="g2" result="tiled2"/>
              <feColorMatrix in="tiled2" type="saturate" values="0" result="grain2"/>
              <feBlend in="grain1" in2="grain2" mode="multiply" result="combinedGrain"/>
              <feBlend in="combinedGrain" in2="SourceGraphic" mode="color-dodge" result="dodged"/>
              <feComposite in="dodged" in2="SourceGraphic" operator="arithmetic" k1="0" k2="0.6" k3="0.4" k4="0" result="mixed"/>
              <feComposite in="mixed" in2="SourceGraphic" operator="in"/>
            </filter>
          </defs>
          <g filter="url(#rGrain)">
            <circle cx="600" cy="550" r="210" fill="url(#rGradGray)"/>
            <line x1="330" y1="395" x2="190" y2="530" stroke="currentColor" strokeWidth="4" opacity="0.35"/>
          </g>
        </svg>
        {/* ドットグループ */}
        <svg
          className={styles.decorDots}
          viewBox="0 0 96 68"
          fill="none"
          style={{ color: 'var(--color-primary)' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="rdGrain" x="0" y="0" width="96" height="68" filterUnits="userSpaceOnUse">
              <feImage href="/grain.png" x="0" y="0" width="512" height="512" result="g1"/>
              <feTile in="g1" result="tiled1"/>
              <feColorMatrix in="tiled1" type="saturate" values="0" result="grain1"/>
              <feBlend in="grain1" in2="SourceGraphic" mode="color-dodge" result="dodged"/>
              <feComposite in="dodged" in2="SourceGraphic" operator="arithmetic" k1="0" k2="0.6" k3="0.4" k4="0" result="mixed"/>
              <feComposite in="mixed" in2="SourceGraphic" operator="in"/>
            </filter>
          </defs>
          <g filter="url(#rdGrain)">
            <circle cx="4"  cy="4"  r="4" fill="currentColor"/>
            <circle cx="32" cy="4"  r="4" fill="currentColor"/>
            <circle cx="60" cy="4"  r="4" fill="currentColor"/>
            <circle cx="88" cy="4"  r="4" fill="currentColor"/>
            <circle cx="4"  cy="32" r="4" fill="currentColor"/>
            <circle cx="32" cy="32" r="4" fill="currentColor"/>
            <circle cx="60" cy="32" r="4" fill="currentColor"/>
            <circle cx="88" cy="32" r="4" fill="currentColor"/>
            <circle cx="4"  cy="60" r="4" fill="currentColor"/>
            <circle cx="32" cy="60" r="4" fill="currentColor"/>
            <circle cx="60" cy="60" r="4" fill="currentColor"/>
            <circle cx="88" cy="60" r="4" fill="currentColor"/>
          </g>
        </svg>
    </div>
    <div className={styles.container}>
      <div className={styles.scoreSection}>
        {isAdvanced && <p className={styles.levelTag}>上級モード</p>}
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
                <span className={styles.correctPrinciple}>{heuristicNames(getCorrectIds(a.question))}</span>
              </div>
              <p className={styles.yourAnswer}>あなたの回答：{heuristicNames(a.selected)}</p>
              <p className={styles.reviewSituation}>{a.question.situation}</p>
              <p className={styles.reviewExplanation}>{a.question.explanation}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.retryWrap}>
        <button className={styles.retryBtn} onClick={onRetry}>
          TOPに戻る
        </button>
      </div>
    </div>
    </>
  )
}
