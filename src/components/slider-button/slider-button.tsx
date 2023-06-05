import './slider-button.scss'
import Arrow from 'public/arrow.svg'

type SliderButtonPropsType = {
	label: string
	cn: string
}

export default function SliderButton({label, cn}: SliderButtonPropsType): JSX.Element {
	return (
		<button className={`${cn} slider-button`}>
			<Arrow className="slider-button__icon" />
			<span className="visually-hidden">{label}</span>
		</button>
	)
}
