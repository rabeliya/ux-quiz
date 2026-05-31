import { useState, useCallback } from 'react'
import TopScreen from './components/TopScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import LearnScreen from './components/LearnScreen'
import { selectQuestions } from './data/questions'

function App() {
  const [screen, setScreen] = useState('top')
  const [level, setLevel] = useState('normal')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  const handleStart = useCallback((selectedLevel = 'normal') => {
    setLevel(selectedLevel)
    setQuestions(selectQuestions(selectedLevel))
    setAnswers([])
    setScreen('quiz')
  }, [])

  const handleLearn = useCallback(() => setScreen('learn'), [])
  const handleExitLearn = useCallback(() => setScreen('top'), [])

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
      {screen === 'top' && <TopScreen onStart={handleStart} onLearn={handleLearn} />}
      {screen === 'learn' && <LearnScreen onExit={handleExitLearn} />}
      {screen === 'quiz' && <QuizScreen questions={questions} level={level} onComplete={handleComplete} onQuit={handleQuit} />}
      {screen === 'result' && <ResultScreen answers={answers} level={level} onRetry={handleRetry} />}
    </>
  )
}

export default App
