import {useCallback, useEffect, useRef, useState} from 'react'

export const useCarousel = () => {
  const maxScrollWidth = useRef<number>(0)
  const [index, setIndex] = useState<number>(0)
  const carousel = useRef<HTMLUListElement>(null)

  const backwardHandler = useCallback(() => {
    if (index > 0) {setIndex(prev => prev - 1)}
  }, [index])

  const forwardHandler = useCallback(() => {
    if (carousel.current !== null && carousel.current.offsetWidth * index <= maxScrollWidth.current) {setIndex(prev => prev + 1)}
  }, [index])

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * index
    }
  }, [index])

  useEffect(() => {
    maxScrollWidth.current = carousel.current? carousel.current.scrollWidth - carousel.current.offsetWidth: 0
  }, [])

  return {backwardHandler, forwardHandler, carousel}
}