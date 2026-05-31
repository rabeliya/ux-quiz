import { useState, useRef } from 'react'
import { HEURISTICS, getCorrectIds } from '../data/questions'
import { playSound } from '../utils/sound'
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
    playSound(correct ? 'correct' : 'incorrect')
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
  }

  const getButtonState = (id) => {
    if (!answered) return selected.includes(id) ? 'selected' : 'default'
    if (correctIds.includes(id)) return 'correct'
    if (selected.includes(id)) return 'incorrect'
    return 'dimmed'
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <span className={styles.progressText}>
            第 {currentIndex + 1} / {questions.length} 問
          </span>
          <button className={styles.quitBtn} onClick={() => setShowQuitConfirm(true)}>
            やめる
          </button>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
      </header>

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
