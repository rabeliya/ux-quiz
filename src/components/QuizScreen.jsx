import { useState, useRef } from 'react'
import { HEURISTICS } from '../data/questions'
import { playSound } from '../utils/sound'
import styles from './QuizScreen.module.css'

export default function QuizScreen({ questions, onComplete, onQuit }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [showQuitConfirm, setShowQuitConfirm] = useState(false)
  const answersRef = useRef([])

  const question = questions[currentIndex]
  const isGood = question.type === 'good'
  const progress = ((currentIndex + 1) / questions.length) * 100

  const handleAnswer = (heuristicId) => {
    if (answered) return
    const isCorrect = heuristicId === question.correct_answer
    playSound(isCorrect ? 'correct' : 'incorrect')
    setSelectedAnswer(heuristicId)
    setAnswered(true)
    answersRef.current = [
      ...answersRef.current,
      { question, selected: heuristicId, isCorrect },
    ]
  }

  const handleNext = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex >= questions.length) {
      onComplete(answersRef.current)
      return
    }
    setCurrentIndex(nextIndex)
    setSelectedAnswer(null)
    setAnswered(false)
  }

  const getButtonState = (heuristicId) => {
    if (!answered) return 'default'
    if (heuristicId === question.correct_answer) return 'correct'
    if (heuristicId === selectedAnswer) return 'incorrect'
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
            {isGood ? (
              <>このデザインは、どの原則を<strong className={styles.emphGood}>【満たして】</strong>いますか？</>
            ) : (
              <>このデザインは、どの原則に<strong className={styles.emphBad}>【違反】</strong>していますか？</>
            )}
          </p>
        </div>

        <div className={styles.grid}>
          {HEURISTICS.map((h) => {
            const state = getButtonState(h.id)
            return (
              <button
                key={h.id}
                className={`${styles.hBtn} ${styles[`state-${state}`]}`}
                onClick={() => handleAnswer(h.id)}
                disabled={answered}
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
            <div className={`${styles.resultBadge} ${selectedAnswer === question.correct_answer ? styles.resultCorrect : styles.resultIncorrect}`}>
              {selectedAnswer === question.correct_answer ? '正解！' : '不正解'}
            </div>
            <p className={styles.explanation}>{question.explanation}</p>
          </div>
        )}
      </main>

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
