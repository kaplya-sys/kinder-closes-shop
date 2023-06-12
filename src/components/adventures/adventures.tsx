import Image from 'next/image'
import Title from '../ui/title/title'
import './adventures.scss'

export default function Adventures() {
	return (
		<section className="adventures">
			<Title cn="adventures__title">Преимущества работы с нами</Title>
			<ul className="adventures__list">
				<li className="adventures__item">
					<h3 className="adventures__subtitle">Уникальный дизайн</h3>
					<Image className="adventures__icon" src="/advantages/advantages-1.svg" width={150} height={100} alt="" />
				</li>
				<li className="adventures__item">
					<h3 className="adventures__subtitle">Быстрая доставка</h3>
					<Image className="adventures__icon" src="/advantages/advantages-2.svg" width={150} height={100} alt="" />
				</li>
				<li className="adventures__item">
					<h3 className="adventures__subtitle">Товар сертифицирован</h3>
					<Image className="adventures__icon" src="/advantages/advantages-3.svg" width={150} height={100} alt="" />
				</li>
				<li className="adventures__item">
					<h3 className="adventures__subtitle">Работаем по России и СНГ</h3>
					<Image className="adventures__icon" src="/advantages/advantages-4.svg" width={150} height={100} alt="" />
				</li>
			</ul>
		</section>
	)
}
