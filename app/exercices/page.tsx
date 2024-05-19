"use client"
import { useState } from "react"

// Next
import Link from "next/link"

// Icons
import { FaPlus } from "react-icons/fa6"

// Types
import { exerciceQuizSelection } from "@/types"

const Exercices = () => {
  const [level, setLevel] = useState<number>(0)
  const [openButton, setOpenButton] = useState<exerciceQuizSelection>({
    status: false,
    type: ""
  })

  const handleOpenButton = (type: string) => {
    setOpenButton({
      status: openButton.type === type ? !openButton.status : true,
      type: type
    })
  }
  return (
    <div className="mx-2">
      <h1 className="title">Exercices</h1>
      <div className="flex flex-col">

        {/* Levels */}
        <div className="flex items-center font-bold w-full md:w-3/4 mx-auto border-2 rounded-lg bg-light">
          <div className="levelSelectButton rounded-l-md" style={level === 6 ? { backgroundColor: 'white', color: 'black', boxShadow: '0px 2px 3px rgba(0,0,0,0.3)', height: '35px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '5px', marginLeft: '2px', marginRight: '2px' } : {}} onClick={() => setLevel(6)}><FaPlus /></div>
          <div className="levelSelectButton" style={level === 5 ? { backgroundColor: 'white', color: 'black', boxShadow: '0px 2px 3px rgba(0,0,0,0.3)', height: '35px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '5px', marginLeft: '2px', marginRight: '2px' } : {}} onClick={() => setLevel(5)}>N5</div>
          <div className="levelSelectButton" style={level === 4 ? { backgroundColor: 'white', color: 'black', boxShadow: '0px 2px 3px rgba(0,0,0,0.3)', height: '35px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '5px', marginLeft: '2px', marginRight: '2px' } : {}} onClick={() => setLevel(4)}>N4</div>
          <div className="levelSelectButton" style={level === 3 ? { backgroundColor: 'white', color: 'black', boxShadow: '0px 2px 3px rgba(0,0,0,0.3)', height: '35px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '5px', marginLeft: '2px', marginRight: '2px' } : {}} onClick={() => setLevel(3)}>N3</div>
          <div className="levelSelectButton" style={level === 2 ? { backgroundColor: 'white', color: 'black', boxShadow: '0px 2px 3px rgba(0,0,0,0.3)', height: '35px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '5px', marginLeft: '2px', marginRight: '2px' } : {}} onClick={() => setLevel(2)}>N2</div>
          <div className="levelSelectButton border-r-0 rounded-r-md" style={level === 1 ? { backgroundColor: 'white', color: 'black', boxShadow: '0px 2px 3px rgba(0,0,0,0.3)', height: '35px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '5px', marginLeft: '2px', marginRight: '2px' } : {}} onClick={() => setLevel(1)}>N1</div>
        </div>

        <div className="flex flex-col mt-5">
          {/* Quiz */}

          {/* Vocabulary */}
          <div className="exerciceButton" onClick={() => handleOpenButton('vocabulary')}>
            <h2>Quiz Vocabulaire</h2>
            {(openButton.type === 'vocabulary' && openButton.status && level !== 0) && <div className="exerciceButtonLanguageContainer">
              <Link className="exerciceButtonLanguage" href={`/exercices/quiz?type=vocabulary&level=${level}&lang=fr`}>FR -&gt; JP</Link>
              <Link className="exerciceButtonLanguage" href={`/exercices/quiz?type=vocabulary&level=${level}&lang=jp`}>JP -&gt; FR</Link>
            </div>}
          </div>

          {/* Sentence */}
          <div className="exerciceButton" onClick={() => handleOpenButton('sentence')}>
            <h2>Quiz Phrase</h2>
            {(openButton.type === 'sentence' && openButton.status && level !== 0) && <div className="exerciceButtonLanguageContainer">
              <Link className="exerciceButtonLanguage" href={`/exercices/quiz?type=sentence&level=${level}&lang=fr`}>FR -&gt; JP</Link>
              <Link className="exerciceButtonLanguage" href={`/exercices/quiz?type=sentence&level=${level}&lang=jp`}>JP -&gt; FR</Link>
            </div>}
          </div>

          {/* Méli-Mélo */}
          <Link className="exerciceButton" href={`/exercices/quiz?type=vocabulary&level=${level}`}>Méli-mélo</Link>

          {/* Flash cards */}
          <div className="exerciceButton" onClick={() => handleOpenButton('flashcard')}>
            <h2>Flash cards</h2>
            {(openButton.type === 'flashcard' && openButton.status && level !== 0) && <div className="exerciceButtonLanguageContainer">
              <Link className="exerciceButtonLanguage" href={`/exercices/flashcard?type=sentence&level=${level}&lang=fr`}>FR -&gt; JP</Link>
              <Link className="exerciceButtonLanguage" href={`/exercices/flashcard?type=sentence&level=${level}&lang=jp`}>JP -&gt; FR</Link>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exercices