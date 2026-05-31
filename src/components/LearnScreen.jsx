import { useState } from 'react'
import { HEURISTICS } from '../data/questions'
import styles from './LearnScreen.module.css'

const TOTAL_STEPS = 11

export default function LearnScreen({ onExit }) {
  const [step, setStep] = useState(0)

  const handleNext = () => {
    if (step < TOTAL_STEPS - 1) setStep(s => s + 1)
    else onExit()
  }

  const handlePrev = () => {
    if (step > 0) setStep(s => s - 1)
  }

  const h = step > 0 ? HEURISTICS[step - 1] : null

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card} key={step === 0 ? 'overview' : h.id}>
          <div className={styles.cardTop}>
            <span className={styles.progress}>{step + 1} / {TOTAL_STEPS}</span>
            <button className={styles.closeBtn} onClick={onExit}>✕</button>
          </div>

          <div className={styles.cardContent}>
            {step === 0 ? (
              <>
                <div className={styles.overviewBadge}>Nielsen's 10 Heuristics</div>
                <h2 className={styles.overviewTitle}>ニールセンの10の<br />ユーザビリティ・ヒューリスティクス</h2>
                <p className={styles.overviewBody}>
                  ヤコブ・ニールセン博士が1990年に提唱した、UIデザインにおける普遍的な「経験則」です。
                  絶対的なルールではなく、デザインを評価・改善するための大まかな指針として機能します。
                  Webサイトやアプリの設計においてこの10原則を意識することで、ユーザーが迷わず快適に操作できる優れたUXを実現できます。
                </p>
                <a
                  href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  nngroup.com — 10 Usability Heuristics ↗
                </a>
              </>
            ) : (
              <>
                <div className={styles.principleHeader}>
                  <span className={styles.principleNum}>{h.id}</span>
                  <div>
                    <h2 className={styles.principleName}>{h.name}</h2>
                    <p className={styles.principleEn}>{h.en}</p>
                  </div>
                </div>
                <p className={styles.detail}>{h.detail}</p>
                <div className={styles.examples}>
                  <div className={styles.exampleGood}>
                    <span className={styles.exampleLabel}>良い例</span>
                    <p className={styles.exampleText}>{h.exampleGood}</p>
                  </div>
                  <div className={styles.exampleBad}>
                    <span className={styles.exampleLabel}>悪い例</span>
                    <p className={styles.exampleText}>{h.exampleBad}</p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className={styles.cardNav}>
            <button className={styles.prevBtn} onClick={handlePrev} disabled={step === 0}>
              ← 戻る
            </button>
            <button className={styles.nextBtn} onClick={handleNext}>
              {step === TOTAL_STEPS - 1 ? 'TOPに戻る' : '次へ →'}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
