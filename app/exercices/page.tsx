"use client"

// Next
import Link from "next/link"

const Exercices = () => {
  return (
    <div>
      <h1 className="title">Exercices</h1>
      <div className="flex flex-col">

        {/* Quiz */}
        <div className="exerciceBlock">
          <h2 className="subtitle">Quiz</h2>
          <div className="exerciceSubBlock">
            <h3 className="secondSubtitle">Vocabulaire</h3>
            <div className="flex flex-row justify-evenly">
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=5">N5</Link>
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=4">N4</Link>
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=3">N3</Link>
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=2">N2</Link>
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=1">N1</Link>
            </div>
          </div>
          <div className="exerciceSubBlock">
            <h3 className="secondSubtitle">Phrase</h3>
            <div className="flex flex-row justify-evenly">
              <Link className="levelButton" href="/exercices/quiz?type=sentence&level=5">N5</Link>
              <Link className="levelButton" href="/exercices/quiz?type=sentence&level=4">N4</Link>
              <Link className="levelButton" href="/exercices/quiz?type=sentence&level=3">N3</Link>
              <Link className="levelButton" href="/exercices/quiz?type=sentence&level=2">N2</Link>
              <Link className="levelButton" href="/exercices/quiz?type=sentence&level=1">N1</Link>
            </div>
          </div>
        </div>

        {/* Méli-Mélo */}
        <div className="exerciceBlock">
          <h2 className="subtitle">Méli-mélo</h2>
          <div className="exerciceSubBlock">
            <div className="flex flex-row justify-evenly">
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=5">N5</Link>
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=4">N4</Link>
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=3">N3</Link>
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=2">N2</Link>
              <Link className="levelButton" href="/exercices/quiz?type=vocabulary&level=1">N1</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exercices