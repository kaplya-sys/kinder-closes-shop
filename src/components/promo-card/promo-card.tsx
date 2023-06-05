import './promo-card.scss'
import Image from 'next/image'
import Link from 'next/link'

type PromoPropsType = {
  title: string
  imgPath: string
  imgAlt: string
  cn?: string
}

export default function PromoCard({title, imgPath, imgAlt, cn}: PromoPropsType): JSX.Element {
  return (
    <div className={`promo promo--active promo--single ${cn}`} style={{backgroundImage: `url("/banner/banner-4.jpg")`}}>
      <div className="promo__content-wrapper">
        <h2 className="promo__title">{title}</h2>
        <Link className="promo__link" href="">Смотреть</Link>
      </div>
    </div>
  )
}
