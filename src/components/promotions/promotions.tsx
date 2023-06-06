"use client"

import {useCallback, useState, MouseEvent} from 'react'
import SliderButton from '../slider-button/slider-button'
import PromoCard from '../promo-card/promo-card'
import Pagination from '../pagination/pagination'
import {Promo} from '@/types/product'
import './promotions.scss'

type PromotionsPropsType = {
	promoData: Array<Promo>
}

export default function Promotions({promoData}: PromotionsPropsType): JSX.Element {
	const [index, setIndex] = useState<number>(1)
	const nextSlideHandler = useCallback((): void => {
		index === promoData.length? setIndex(1): setIndex(index + 1)
	}, [index])
	const prevSlideHandler = useCallback((): void => {
		index === 1? setIndex(promoData.length): setIndex(index - 1)
	}, [index])
	const onClickHandler = useCallback((e: MouseEvent): void => {
		const evt = e.target as HTMLButtonElement
		setIndex(Number(evt.name))
	}, [])
	const currentSlide: Array<Promo> = promoData.filter(item => item.id === index)

	return (
		<section className="promotions">
			<div className="promotions__list">
				{
					currentSlide.map((item) => <PromoCard promoData={{...item}} cn='promotions__item' key={item.id} />)
				}
			</div>
			<SliderButton
				label='Предыдущий слайд'
				cn='promotions__slider-button promotions__slider-button--prev'
				handlerSwitchSlide={prevSlideHandler}
			/>
			<SliderButton
				label='Следующий слайд'
				cn='promotions__slider-button promotions__slider-button--next'
				handlerSwitchSlide={nextSlideHandler}
			/>
			<Pagination elementList={promoData} onClick={onClickHandler} cn="promotions__pagination" index={index} />
		</section>
	)
}