import { useState, useRef } from 'react'
import { HEURISTICS, getCorrectIds } from '../data/questions'
import HeuristicsModal from './HeuristicsModal'
import styles from './QuizScreen.module.css'

const isExactMatch = (a, b) => {
  if (a.length !== b.length) return false
  const sortedB = [...b].sort((x, y) => x - y)
  return [...a].sort((x, y) => x - y).every((v, i) => v === sortedB[i])
}

export default function QuizScreen({ questions, level = 'normal', onComplete, onQuit }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState([])
  const [answered, setAnswered] = useState(false)
  const [showQuitConfirm, setShowQuitConfirm] = useState(false)
  const [showRef, setShowRef] = useState(false)
  const answersRef = useRef([])

  const isAdvanced = level === 'advanced'
  const pickCount = isAdvanced ? 2 : 1
  const question = questions[currentIndex]
  const isGood = question.type === 'good'
  const correctIds = getCorrectIds(question)
  const progress = ((currentIndex + 1) / questions.length) * 100
  const isAnswerCorrect = answered && isExactMatch(selected, correctIds)

  const submitAnswer = (ids) => {
    const correct = isExactMatch(ids, correctIds)
    setSelected(ids)
    setAnswered(true)
    answersRef.current = [
      ...answersRef.current,
      { question, selected: ids, isCorrect: correct },
    ]
  }

  const handleSelect = (id) => {
    if (answered) return
    if (!isAdvanced) {
      submitAnswer([id])
      return
    }
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= pickCount) return prev
      return [...prev, id]
    })
  }

  const handleConfirm = () => {
    if (selected.length !== pickCount) return
    submitAnswer(selected)
  }

  const handleNext = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex >= questions.length) {
      onComplete(answersRef.current)
      return
    }
    setCurrentIndex(nextIndex)
    setSelected([])
    setAnswered(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const getButtonState = (id) => {
    if (!answered) return selected.includes(id) ? 'selected' : 'default'
    if (correctIds.includes(id)) return 'correct'
    if (selected.includes(id)) return 'incorrect'
    return 'dimmed'
  }

  return (
    <div className={styles.container}>
      <div className={styles.decorLayer} aria-hidden="true">
      {/* 散りばめ図形（選択肢背景） */}
      <svg
        className={styles.decorScatter}
        viewBox="0 0 600 900"
        preserveAspectRatio="xMidYMid slice"
        overflow="visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
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
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="qGradGray" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#9C9EA4"/>
            <stop offset="100%" stopColor="#D0D2DA" stopOpacity="0.97"/>
          </linearGradient>
          <filter id="qGrain" x="0" y="0" width="600" height="550" filterUnits="userSpaceOnUse">
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
        <g filter="url(#qGrain)">
          <circle cx="600" cy="550" r="210" fill="url(#qGradGray)"/>
          <line x1="330" y1="395" x2="190" y2="530" stroke="currentColor" strokeWidth="4" opacity="0.35"/>
        </g>
      </svg>
      {/* ドットグループ: 左端32px */}
      <svg
        className={styles.decorDots}
        viewBox="0 0 96 68"
        fill="none"
        style={{ color: 'var(--color-primary)' }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="dGrain" x="0" y="0" width="96" height="68" filterUnits="userSpaceOnUse">
            <feImage href="/grain.png" x="0" y="0" width="512" height="512" result="g1"/>
            <feTile in="g1" result="tiled1"/>
            <feColorMatrix in="tiled1" type="saturate" values="0" result="grain1"/>
            <feBlend in="grain1" in2="SourceGraphic" mode="color-dodge" result="dodged"/>
            <feComposite in="dodged" in2="SourceGraphic" operator="arithmetic" k1="0" k2="0.6" k3="0.4" k4="0" result="mixed"/>
            <feComposite in="mixed" in2="SourceGraphic" operator="in"/>
          </filter>
        </defs>
        <g filter="url(#dGrain)">
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
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span className={styles.progressText}>
            第 {currentIndex + 1} / {questions.length} 問
          </span>
          <div className={styles.headerActions}>
            <button className={styles.refBtn} onClick={() => setShowRef(true)}>
              10原則
            </button>
            <button className={styles.quitBtn} onClick={() => setShowQuitConfirm(true)}>
              やめる
            </button>
          </div>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
      </header>

      {showRef && <HeuristicsModal onClose={() => setShowRef(false)} />}

      {showQuitConfirm && (
        <div className={styles.overlay} onClick={() => setShowQuitConfirm(false)}>
          <div className={styles.quitDialog} onClick={e => e.stopPropagation()}>
            <p className={styles.quitMessage}>クイズを終了しますか？<br />進捗はリセットされます。</p>
            <div className={styles.quitActions}>
              <button className={styles.quitCancel} onClick={() => setShowQuitConfirm(false)}>続ける</button>
              <button className={styles.quitConfirmBtn} onClick={onQuit}>終了する</button>
            </div>
          </div>
        </div>
      )}

      <main className={styles.main}>
        <div className={styles.card} key={question.id}>
          <p className={styles.situation}>{question.situation}</p>

          <p className={styles.questionText}>
            このデザインは、{isAdvanced ? 'どの2つの原則' : 'どの原則'}
            {isGood ? (
              <>を<strong className={styles.emphGood}>【満たして】</strong>いますか？</>
            ) : (
              <>に<strong className={styles.emphBad}>【違反】</strong>していますか？</>
            )}
          </p>
          {isAdvanced && !answered && (
            <p className={styles.pickHint}>
              該当する原則を2つ選んで「回答する」を押してください。
            </p>
          )}
        </div>

        <div className={styles.grid}>
          {HEURISTICS.map((h) => {
            const state = getButtonState(h.id)
            const lockedOut = isAdvanced && !answered && selected.length >= pickCount && !selected.includes(h.id)
            return (
              <button
                key={h.id}
                className={`${styles.hBtn} ${styles[`state-${state}`]}`}
                onClick={() => handleSelect(h.id)}
                disabled={answered || lockedOut}
              >
                <span className={styles.hNum}>原則 {h.id}</span>
                <span className={styles.hName}>{h.name}</span>
                <span className={styles.hEn}>{h.en}</span>
                {answered && state === 'correct' && <span className={styles.mark}>✓</span>}
                {answered && state === 'incorrect' && <span className={styles.mark}>✗</span>}
              </button>
            )
          })}
        </div>

        {answered && (
          <div className={styles.feedback} style={{ animation: 'slide-up 0.3s ease' }}>
            <div className={`${styles.resultBadge} ${isAnswerCorrect ? styles.resultCorrect : styles.resultIncorrect}`}>
              {isAnswerCorrect ? '正解！' : '不正解'}
            </div>
            <p className={styles.explanation}>{question.explanation}</p>
          </div>
        )}
      </main>

      {isAdvanced && !answered && (
        <footer className={styles.footer}>
          <button
            className={styles.nextBtn}
            onClick={handleConfirm}
            disabled={selected.length !== pickCount}
          >
            {selected.length < pickCount
              ? `あと ${pickCount - selected.length} つ選択`
              : '回答する'}
          </button>
        </footer>
      )}

      {answered && (
        <footer className={styles.footer}>
          <button className={styles.nextBtn} onClick={handleNext}>
            {currentIndex === questions.length - 1 ? '結果を見る' : '次の問題へ'}
          </button>
        </footer>
      )}
    </div>
  )
}
