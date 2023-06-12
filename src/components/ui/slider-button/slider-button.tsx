import {ReactNode} from 'react'
import Arrow from 'public/arrow.svg'
import './slider-button.scss'

type SliderButtonPropsType = {
	children: ReactNode
	cn: string
	handlerSwitchSlide: () => void
}

export default function SliderButton({cn, children, handlerSwitchSlide}: SliderButtonPropsType): JSX.Element {
	return (
		<button className={`${cn} slider-button`} onClick={handlerSwitchSlide} type="button">
			<Arrow className="slider-button__icon" />
			<span className="visually-hidden">{children}</span>
		</button>
	)
}
