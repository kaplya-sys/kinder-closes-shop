"use client"

import {useCallback, MouseEvent, useMemo} from 'react'
import {useSwitchSlide} from '../hooks/useSwitchSlide'
import SliderButton from '../slider-button/slider-button'
import PromoCard from '../promo-card/promo-card'
import Pagination from '../pagination/pagination'
import {Promo} from '@/types/product'
import './promotions.scss'

type PromotionsPropsType = {
	promoData: Array<Promo>
}

export default function Promotions({promoData}: PromotionsPropsType): JSX.Element {
	const {index, prevSlideHandler, nextSlideHandler, onClickHandler} = useSwitchSlide(promoData.length)

	const currentSlide: Array<Promo> = useMemo(() => {
		return promoData.filter(item => item.id === index)
	},[promoData, index])

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
			<Pagination elementList={promoData} onClick={onClickHandler} index={index} />
		</section>
	)
}