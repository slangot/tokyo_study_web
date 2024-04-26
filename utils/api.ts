// types
import { SentenceProps, VocabularyProps } from "@/types"

export const getApi = async (type: string) => {
  const result = await fetch(`/api/${type}`)
  const data = await result.json()
  return data
}

export const postApi = async (type: string, data: VocabularyProps | SentenceProps) => {
  const result = await fetch(`/api/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const response = await result.json()
  return response
}