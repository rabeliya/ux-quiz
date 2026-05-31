import styles from './TopScreen.module.css'

export default function TopScreen({ onStart, onLearn }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge}>Nielsen's 10 Heuristics</div>
        <h1 className={styles.title}>ヒューリスティクス<br />10本ノック</h1>
        <p className={styles.description}>
          実際のUIシナリオを見て、<br />
          ニールセンの10原則のどれに該当・違反しているかを<br />
          10択から当てよう。
        </p>
        <div className={styles.meta}>
          <span>全10問</span>
          <span className={styles.dot} />
          <span>Good / Bad 各5問</span>
          <span className={styles.dot} />
          <span>ランダム出題</span>
        </div>
        <div className={styles.levels}>
          <button className={styles.levelBtn} onClick={() => onStart('normal')}>
            <span className={styles.levelName}>通常モード</span>
            <span className={styles.levelDesc}>原則を1つ選ぶ</span>
          </button>
          <button className={`${styles.levelBtn} ${styles.levelAdvanced}`} onClick={() => onStart('advanced')}>
            <span className={styles.levelBadge}>上級</span>
            <span className={styles.levelName}>上級モード</span>
            <span className={styles.levelDesc}>該当する原則を2つ選ぶ</span>
          </button>
        </div>
        <button className={styles.hintBtn} onClick={onLearn}>
          ニールセンの10原則とは？
        </button>
      </div>
    </div>
  )
}
