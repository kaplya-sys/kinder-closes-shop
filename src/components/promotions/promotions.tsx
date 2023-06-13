"use client"

import {useMemo} from 'react'
import {useSwitchSlide} from '../../hooks/useSwitchSlide'
import SliderButton from '../ui/slider-button/slider-button'
import PromoCard from '../promo-card/promo-card'
import Pagination from '../pagination/pagination'
import {PromoType} from '@/types/product'
import './promotions.scss'

type PromotionsPropsType = {
	promotions: Array<PromoType>
}

export default function Promotions({promotions}: PromotionsPropsType): JSX.Element {
	const {index, prevSlideHandler, nextSlideHandler, onClickHandler} = useSwitchSlide(promotions.length)
	const currentSlide: Array<PromoType> = useMemo(() => {
		return promotions.filter(item => item.id === index)
	},[promotions, index])

	return (
		<section className="promotions">
			<h2 className="visually-hidden">Промоакции</h2>
			<div className="promotions__list">
				{
					currentSlide.map((item) => <PromoCard key={item.id} promo={{...item}} cn='promotions__item' />)
				}
			</div>
			<SliderButton
				cn='promotions__slider-button promotions__slider-button--prev'
				handlerSwitchSlide={prevSlideHandler}
			>
				Предыдущий слайд
			</SliderButton>
			<SliderButton
				cn='promotions__slider-button promotions__slider-button--next'
				handlerSwitchSlide={nextSlideHandler}
			>
				Следующий слайд
			</SliderButton>
			<Pagination elementList={promotions} onClick={onClickHandler} index={index} />
		</section>
	)
}