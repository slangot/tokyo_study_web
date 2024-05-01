// Types
import { SentenceProps, VocabularyProps } from "@/types"

export const apiAllowedTypes = ['grammar', 'grammar_examples', 'sentence', 'sentence_extra', 'vocabulary', 'vocabulary_extra']

export const getApi = async (type: string, level?: string, count?: boolean, limit?: number) => {
  let apiUrl = `/api/get?type=${type}`
  count && (apiUrl += '&count=true')
  level && (apiUrl += `&level=${level}`)
  limit && (apiUrl += `&limit=${limit}`)

  const result = await fetch(apiUrl)
  const data = await result.json()
  return data
}

export const postApi = async (type: string, data: VocabularyProps | SentenceProps) => {
  const result = await fetch(`/api/post?type=${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const response = await result.json()
  return response
}
