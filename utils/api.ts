// types
import { SentenceProps, VocabularyProps } from "@/types"

export const apiAllowedTypes = ['vocabulary', 'sentence']

export const getApi = async (type: string, count?: boolean, limit?: number) => {
  let apiUrl = `/api/get?type=${type}`
  count && (apiUrl += '&count=true')
  limit && (apiUrl += `&limit=${limit}`)
  const result = await fetch(apiUrl)
  const data = await result.json()
  console.log('data FRONT : ', data)
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
