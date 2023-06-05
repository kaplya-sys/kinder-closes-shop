import Image from "next/image"
import Link from "next/link"
import './promotions.scss'
import SliderButton from "../slider-button/slider-button"

type Promo = {
	title: string
  imgPath: string
  imgAlt: string
  cn?: string
}

type PromotionsPropsType = {
	promoData: Promo[]
}

export default function Promotions({promoData}: PromotionsPropsType): JSX.Element {
	return (
		<section className="promotions">
			<ul className="promotions__list">
				<li className="promotions__item promotions__item--active">
					<div className="promotions__content-wrapper">
						<h2 className="promotions__title">Черная пятница на всю коллекцию!<br /><span className="promotions__addition">позволь себе больше</span></h2>
						<Link className="promotions__link" href="">Смотреть</Link>
					</div>
					<Image className="promotions__image" src="/banner/banner-1.jpg" width={824} height={304} alt="Малыш сидя на белом ковре, прикусил ложку. А вокруг него детские игрушки." />
				</li>
				<li className="promotions__item">
					<div className="promotions__content-wrapper">
						<h2 className="promotions__title">Оставьте заявку сегодня и получите скидку завтра!</h2>
						<Link className="promotions__link" href="">Смотреть</Link>
					</div>
					<Image className="promotions__image" src="/banner/banner-2.jpg" width={824} height={304} alt="Двое подростков, мальчик и девочка, в прыжке." />
				</li>
				<li className="promotions__item">
					<div className="promotions__content-wrapper">
						<h2 className="promotions__title">Черная пятница на всю коллекцию!</h2>
						<Link className="promotions__link" href="">Смотреть</Link>
					</div>
					<Image className="promotions__image" src="/banner/banner-3.jpg" width={824} height={304} alt="Малыш в белом костюме с рожками." />
				</li>
				<li className="promotions__item">
					<div className="promotions__content-wrapper">
						<h2 className="promotions__title">Черная пятница на всю коллекцию!</h2>
						<Link className="promotions__link" href="">Смотреть</Link>
					</div>
					<Image className="promotions__image" src="/banner/banner-4.jpg" width={824} height={304} alt="Малыш сидит на стуле и целует грудничка в щеку." />
				</li>
			</ul>
			<SliderButton label='Предыдущий слайд' cn='promotions__slider-button promotions__slider-button--prev' />
			<SliderButton label='Следующий слайд' cn='promotions__slider-button promotions__slider-button--next' />
			<ol className="promotions__pagination">
				<li className="promotions__pagination-item promotions__pagination-item--active">
					<button className="promotions__pagination-button" type="button">
						<span className="visually-hidden">1 слайд</span>
					</button>
				</li>
				<li className="promotions__pagination-item">
					<button className="promotions__pagination-button" type="button">
						<span className="visually-hidden">2 слайд</span>
					</button>
				</li>
				<li className="promotions__pagination-item">
					<button className="promotions__pagination-button" type="button">
						<span className="visually-hidden">3 слайд</span>
					</button>
				</li>
				<li className="promotions__pagination-item">
					<button className="promotions__pagination-button" type="button">
						<span className="visually-hidden">4 слайд</span>
					</button>
				</li>
			</ol>
		</section>
	)
}