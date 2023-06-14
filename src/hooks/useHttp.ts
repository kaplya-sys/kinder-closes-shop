import { useCallback, useState } from 'react'
import { API_URL } from '@/constants/constants'

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const api = useCallback(async (
    method: string = 'GET',
    body: BodyInit | null = null,
    headers: HeadersInit = {},
    revalidate: number = 0
    ) => {
      setLoading(true)
  
      try {
        if (body) {
          body = JSON.stringify(body)
          headers = {'Content-Type':'application/json'}
        }
        const response = await fetch(API_URL, { method, body, headers, next: {revalidate} })
        const data = await response.json()
        setLoading(false)
  
        return data
      } catch (error) {
        const e = error as Error
        setError(e.message)
        setLoading(false)
      }
  }, [])

  return { api, error, loading }
}