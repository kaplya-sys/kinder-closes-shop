import Link from 'next/link'
import { Promo } from '@/types/product'
import './promo-card.scss'

type PromoPropsType = {
  promoData: Promo
  cn?: string
}

export default function PromoCard({promoData, cn}: PromoPropsType): JSX.Element {
  const {title, imgPath} = promoData
  return (
    <div className={`${cn} promo`} style={{backgroundImage: `url(${imgPath})`}}>
      <div className="promo__content-wrapper">
        <h3 className="promo__title">{title}</h3>
        <Link className="promo__link" href="">Смотреть</Link>
      </div>
    </div>
  )
}
