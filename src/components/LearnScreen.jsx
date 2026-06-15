import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step])

  return (
    <>
    <div className={styles.decorLayer} aria-hidden="true">
      <svg
        className={styles.decorScatter}
        viewBox="0 0 600 900"
        preserveAspectRatio="xMidYMid slice"
        overflow="visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="486" cy="158" r="22" fill="#4338ca"/>
        <circle cx="534" cy="212" r="7"  fill="#4338ca"/>
        <circle cx="448" cy="216" r="5"  fill="#9C9EA4"/>
        <circle cx="112" cy="346" r="14" fill="#9C9EA4"/>
        <circle cx="156" cy="392" r="6"  fill="#4338ca"/>
        <circle cx="322" cy="568" r="10" fill="#4338ca"/>
        <circle cx="600" cy="430" r="18" fill="#4338ca"/>
        <circle cx="0"   cy="628" r="16" fill="#9C9EA4"/>
      </svg>
      <svg
        className={styles.decorLine}
        viewBox="0 0 600 550"
        fill="none"
        style={{ color: 'var(--color-primary)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lGradGray" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#9C9EA4"/>
            <stop offset="100%" stopColor="#D0D2DA" stopOpacity="0.97"/>
          </linearGradient>
          <filter id="lGrain" x="0" y="0" width="600" height="550" filterUnits="userSpaceOnUse">
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
        <g filter="url(#lGrain)">
          <circle cx="600" cy="550" r="210" fill="url(#lGradGray)"/>
          <line x1="330" y1="395" x2="190" y2="530" stroke="currentColor" strokeWidth="4" opacity="0.35"/>
        </g>
      </svg>
      <svg
        className={styles.decorDots}
        viewBox="0 0 96 68"
        fill="none"
        style={{ color: 'var(--color-primary)' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="ldGrain" x="0" y="0" width="96" height="68" filterUnits="userSpaceOnUse">
            <feImage href="/grain.png" x="0" y="0" width="512" height="512" result="g1"/>
            <feTile in="g1" result="tiled1"/>
            <feColorMatrix in="tiled1" type="saturate" values="0" result="grain1"/>
            <feBlend in="grain1" in2="SourceGraphic" mode="color-dodge" result="dodged"/>
            <feComposite in="dodged" in2="SourceGraphic" operator="arithmetic" k1="0" k2="0.6" k3="0.4" k4="0" result="mixed"/>
            <feComposite in="mixed" in2="SourceGraphic" operator="in"/>
          </filter>
        </defs>
        <g filter="url(#ldGrain)">
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
                  <span className={styles.principleNum}>原則{h.id}</span>
                  <h2 className={styles.principleName}>{h.name}</h2>
                  <p className={styles.principleEn}>{h.en}</p>
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
    </>
  )
}
