import { Promo } from '@/types/product'
import PromoCard from '../promo-card/promo-card'
import './promo-action.scss'

type PromoActionPropsType = {
  promo: Promo
}

export default function PromoAction({ promo }: PromoActionPropsType) {
  return (
    <section className="promo-action">
      <h2 className="visually-hidden"></h2>
      <PromoCard promoData={promo} cn='promo--single' />
    </section>
  )
}
