"use client"

// React
import { useEffect, useState } from "react"

// Next
import { useSearchParams } from "next/navigation"

// Packages
import { RotatingLines } from "react-loader-spinner"

// Types
import { VocabularyProps } from "@/types"

// UiKit
import { BackButton, ExerciceQuizButton, EyeButton } from "@/uikit/Buttons";

// Utils
import { getApi } from "@/utils/api"
import { dbType, manageScore, randomizeData } from "@/utils/handlers"

const Quiz = () => {

  // Params
  const searchParams = useSearchParams()
  const exerciceType = searchParams.get("type")
  const level = searchParams.get("level")

  // Platform
  let isSafari = false
  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    isSafari = true
  }

  // State
  const [answers, setAnswers] = useState<VocabularyProps[]>([])
  const [correctAnswer, setCorrectAnswer] = useState<VocabularyProps>()
  const [data, setData] = useState<VocabularyProps[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [score, setScore] = useState<number>(0)
  const [scoreMax, setScoreMax] = useState<number>(0)
  const [showAnswers, setShowAnswers] = useState<boolean>(false)
  const [showFurigana, setShowFurigana] = useState<boolean>(false)

  const fetchData = async (dbType: string, level: string) => {
    try {
      const results = await getApi(dbType, level, false, 4)
      for (const item of results) {
        item.isAnswer = false
      }
      results[0].isAnswer = true
      setData(results)
      setIsLoading(false)
    } catch (error) {
      console.error("error : ", error)
    }
  }

  const handleNext = (isCorrect: boolean | undefined) => {
    setShowAnswers(true)
    if (!isSafari) {
      navigator.vibrate([50])
    }
    setIsCorrect(isCorrect)
    if (isCorrect !== undefined) {
      manageScore(isCorrect, score, setScore, scoreMax, setScoreMax)
    }
    setTimeout(() => {
      if (level && exerciceType) {
        fetchData(dbType(exerciceType, level), level)
        setShowAnswers(false)
        setIsCorrect(undefined)
      }
    }, 1500)
  }

  useEffect(() => {
    if (level && exerciceType) {
      setIsLoading(true)
      fetchData(dbType(exerciceType, level), level)
    }
  }, [level])

  useEffect(() => {
    if (data.length > 0) {
      const dataToDisplay = randomizeData(data)
      const correctAnswerToDisplay = dataToDisplay.find((answer) => answer.isAnswer)
      setAnswers(dataToDisplay)
      setCorrectAnswer(correctAnswerToDisplay)
    }
  }, [data])

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-row items-center justify-center w-full mb-3">
        <BackButton url="/exercices" />
        <h1 className="exerciceTitle">Quiz {exerciceType} {level && `N${level}`}</h1>
        <p>{score}/{scoreMax}</p>
      </div>
      <div className="exerciceContentBlock" style={isCorrect === undefined ? { boxShadow: 'none' } : isCorrect ? { boxShadow: '0px 0px 9px 3px green' } : { boxShadow: '0px 0px 9px 3px red' }}>
        {level &&
          <div className='absolute top-0 flex justify-end w-full h-auto -my-1 px-3'>
            <EyeButton state={showFurigana} setState={setShowFurigana} label="字" />
          </div>
        }
        {isLoading ?
          <div className="flex items-center justify-center w-full h-full">
            <RotatingLines
              visible={true}
              width="96"
              strokeColor="#520380"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          </div>
          :
          <>
            {correctAnswer &&
              <div className="flex items-center justify-center text-2xl md:text-4xl lg:text-5xl font-bold mb-2 mt-2 py-3" style={isCorrect === undefined ? { color: 'white' } : isCorrect ? { color: 'green' } : { color: 'red' }}>
                {correctAnswer.kanji ?
                  showFurigana ?
                    exerciceType !== 'sentence' ?
                      <ruby>{correctAnswer.kanji}。<rp>(</rp><rt>{correctAnswer.japanese}</rt><rp>)</rp></ruby>
                      :
                      <div className="flex flex-col items-center justify-center">
                        <h3>{correctAnswer.kanji}</h3>
                        <p className="text-lg mt-2 text-light">{correctAnswer.japanese}</p>
                      </div>
                    : correctAnswer.kanji
                  : correctAnswer.japanese
                }
              </div>
            }
            <div className="flex items-center justify-evenly flex-wrap w-full">
              {answers.length > 0 && answers.map((answer, index) => (
                answer.french && answer.isAnswer !== undefined && exerciceType &&
                <ExerciceQuizButton key={index} content={answer.french} action={handleNext} isAnswer={answer.isAnswer} showAnswers={showAnswers} exerciceType={exerciceType} />
              ))}
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Quiz