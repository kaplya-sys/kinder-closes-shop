"use client"

import './promotions.scss'
import SliderButton from '../slider-button/slider-button'
import PromoCard from '../promo-card/promo-card'
import {useCallback, useState} from 'react'

type Promo = {
	id: number
	title: string | Array<string | JSX.Element>
	imgPath: string
}

type PromotionsPropsType = {
	promoData: Promo[]
	cn?: string
}

export default function Promotions({ promoData, cn }: PromotionsPropsType): JSX.Element {
	const [index, setIndex] = useState<number>(1)
	const handlerNextSlide = useCallback(() => {
		index === promoData.length? setIndex(1): setIndex(index + 1)
	}, [index])
	const handlerPrevSlide = useCallback(() => {
		index === 1? setIndex(promoData.length): setIndex(index - 1)
	}, [index])

	const currentSlide: Promo[] = promoData.filter(item => item.id === index)

	return (
		<section className="promotions">
			<div className="promotions__list">
				{
					currentSlide.map(item => <PromoCard key={item.id} promoData={{...item}} cn='promotions__item' />)
				}
			</div>
			<SliderButton
				label='Предыдущий слайд'
				cn='promotions__slider-button promotions__slider-button--prev'
				handlerSwitchSlide={handlerPrevSlide}
			/>
			<SliderButton
				label='Следующий слайд'
				cn='promotions__slider-button promotions__slider-button--next'
				handlerSwitchSlide={handlerNextSlide}
			/>
			<ol className="promotions__pagination">
				{
					promoData.map(item => (
						<li key={item.id} className={`promotions__pagination-item ${item.id === index? 'promotions__pagination-item--active': ''}`}>
							<button className="promotions__pagination-button" type="button" name={String(item.id)} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setIndex(Number(e.target.name))}>
								<span className="visually-hidden">{item.id} слайд</span>
							</button>
						</li>
					))
				}
			</ol>
		</section>
	)
}