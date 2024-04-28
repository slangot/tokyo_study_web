// Types
import { SentenceProps, VocabularyProps } from "@/types"

export const apiAllowedTypes = ['vocabulary', 'sentence', 'grammar', 'grammar_examples']

export const getApi = async (type: string, level?: number, count?: boolean, limit?: number) => {
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
