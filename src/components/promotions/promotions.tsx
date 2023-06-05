import Image from "next/image"
import Link from "next/link"
import './promotions.scss'
import SliderButton from "../slider-button/slider-button"
import PromoCard from "../promo-card/promo-card"

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
	return (
		<section className="promotions">
			<div className="promotions__list">
				{
					promoData.map(item => <PromoCard key={item.id} promoData={{ ...item }} cn='promotions__item' />)
				}
			</div>
			<SliderButton label='Предыдущий слайд' cn='promotions__slider-button promotions__slider-button--prev' />
			<SliderButton label='Следующий слайд' cn='promotions__slider-button promotions__slider-button--next' />
			<ol className="promotions__pagination">
				{
					promoData.map(item => (
						<li className="promotions__pagination-item promotions__pagination-item--active">
							<button className="promotions__pagination-button" type="button">
								<span className="visually-hidden">{item.id} слайд</span>
							</button>
						</li>
					))
				}
			</ol>
		</section>
	)
}