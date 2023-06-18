import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay: number = 300): string => {
  const [debounce, setDebounce] = useState<string>(value)

  useEffect(() => {
    const timeout = setTimeout(() => setDebounce(value), delay)

    return () => clearTimeout(timeout)
  }, [debounce, delay])
  
  return debounce
}
