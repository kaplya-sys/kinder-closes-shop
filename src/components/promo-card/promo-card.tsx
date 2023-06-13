import Link from 'next/link'
import { PromoType } from '@/types/product'
import './promo-card.scss'

type PromoPropsType = {
  promo: PromoType
  cn?: string
}

export default function PromoCard({promo, cn}: PromoPropsType): JSX.Element {
  const {imagePath, title} = promo

  return (
    <div className={`${cn} promo`} style={{backgroundImage: `url(${imagePath})`}}>
      <div className="promo__content-wrapper">
        <h3 className="promo__title">{title}</h3>
        <Link className="promo__link" href="">Смотреть</Link>
      </div>
    </div>
  )
}
