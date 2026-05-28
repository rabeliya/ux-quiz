import { useState, useCallback } from 'react'
import TopScreen from './components/TopScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import { selectQuestions } from './data/questions'

function App() {
  const [screen, setScreen] = useState('top')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  const handleStart = useCallback(() => {
    setQuestions(selectQuestions())
    setAnswers([])
    setScreen('quiz')
  }, [])

  const handleComplete = useCallback((answersData) => {
    setAnswers(answersData)
    setScreen('result')
  }, [])

  const handleRetry = useCallback(() => {
    setScreen('top')
  }, [])

  const handleQuit = useCallback(() => {
    setScreen('top')
  }, [])

  return (
    <>
      {screen === 'top' && <TopScreen onStart={handleStart} />}
      {screen === 'quiz' && <QuizScreen questions={questions} onComplete={handleComplete} onQuit={handleQuit} />}
      {screen === 'result' && <ResultScreen answers={answers} onRetry={handleRetry} />}
    </>
  )
}

export default App
