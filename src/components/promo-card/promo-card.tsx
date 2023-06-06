import './promo-card.scss'
import Link from 'next/link'

type PromoPropsType = {
  promoData: {
    id: number
    title: string | Array<string |  JSX.Element>
    imgPath: string
  }
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
