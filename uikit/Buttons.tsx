// React
import React, { Dispatch, SetStateAction } from "react"

// Next
import { useRouter } from "next/navigation"

// Icons
import { FaArrowLeft, FaEye, FaEyeSlash, FaGear } from "react-icons/fa6";

// Interfaces
interface BackButtonProps {
  url: string;
  color?: string;
  bgColor?: string;
}

interface ExerciceQuizButtonProps {
  content: string;
  action: any;
  isAnswer: boolean;
  showAnswers: boolean;
  exerciceType?: string;
}

interface EyeButtonProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  label?: string;
}

interface SelectButtonProps {
  setState: Dispatch<SetStateAction<string | undefined>>;
  values: string[];
  labels: string[];
  type: string;
}

interface SettingsButtonProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}



export const BackButton: React.FC<BackButtonProps> = ({ url, color, bgColor }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(url)
  }
  return (
    <button onClick={() => handleClick()} className="flex items-center justify-center"><FaArrowLeft /></button>
  )
}

export const ExerciceQuizButton: React.FC<ExerciceQuizButtonProps> = ({ content, action, isAnswer, showAnswers, exerciceType }) => {
  const isLongContent = exerciceType === "sentence"
  return (
    <button
      onClick={() => action(isAnswer)}
      className={isLongContent ? 'exerciceLongContentDisplay' : 'exerciceShortContentDisplay'}
      style={showAnswers ? isAnswer ? { backgroundColor: "rgba(37, 161, 31, 0.8)" } : { backgroundColor: "rgba(186, 36, 9, 0.8)" } : {}}
    >
      {content}
    </button>
  )
}

export const EyeButton: React.FC<EyeButtonProps> = ({ state, setState, label }) => {
  const handleClick = () => {
    setState(!state)
  }
  return (
    <button onClick={() => handleClick()}>
      {state ? <FaEyeSlash color="rgb(230,215,250)" size={20} /> : <FaEye color="rgb(230,215,250)" size={20} />}
    </button>
  )
}

export const SettingsButton: React.FC<SettingsButtonProps> = ({ state, setState }) => {
  const handleClick = () => {
    setState(!state)
  }
  return (
    <button onClick={() => handleClick()} className="absolute z-30 top-0 right-0 p-3 rounded flex items-center justify-center text-gray-400 text-2xl">
      <FaGear />
    </button>
  )
}

export const SelectButton: React.FC<SelectButtonProps> = ({ setState, values, labels, type }) => {
  const handleSelectChange = (value: string) => {
    if (type === "number") {
      parseInt(value)
    }
    setState(value)
  }

  return (
    <select className="text-dark bg-dark w-1/2 h-10" onChange={(e) => handleSelectChange(e.target.value)}>
      {values.map((value, index) => (
        <option key={index} value={value} className="text-dark">{labels[index]}</option>
      ))}
    </select>
  )
}

