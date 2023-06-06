import './slider-button.scss'
import Arrow from 'public/arrow.svg'

type SliderButtonPropsType = {
	label: string
	cn: string
	handlerSwitchSlide: () => void
}

export default function SliderButton({label, cn, handlerSwitchSlide}: SliderButtonPropsType): JSX.Element {
	return (
		<button className={`${cn} slider-button`} onClick={handlerSwitchSlide}>
			<Arrow className="slider-button__icon" />
			<span className="visually-hidden">{label}</span>
		</button>
	)
}
