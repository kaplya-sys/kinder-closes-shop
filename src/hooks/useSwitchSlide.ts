import {useCallback, useState, MouseEvent} from 'react'

export const useSwitchSlide = (arrayLength: number) => {
  const [index, setIndex] = useState<number>(1)

	const nextSlideHandler = useCallback((): void => {
		index === arrayLength? setIndex(1): setIndex(prev => prev + 1)
	}, [index])
  
	const prevSlideHandler = useCallback((): void => {
		index === 1? setIndex(arrayLength): setIndex(prev => prev - 1)
	}, [index])

	const onClickHandler = useCallback((e: MouseEvent): void => {
		const evt = e.target as HTMLButtonElement
		setIndex(Number(evt.name))
	}, [])

  return {index, nextSlideHandler, prevSlideHandler, onClickHandler}
}
