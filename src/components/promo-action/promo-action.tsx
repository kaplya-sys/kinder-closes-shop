import { PromoType } from '@/types/product-type'
import PromoCard from '../promo-card/promo-card'
import './promo-action.scss'

type PromoActionPropsType = {
  promo: PromoType
}

export default function PromoAction({ promo }: PromoActionPropsType) {
  return (
    <section className="promo-action">
      <h2 className="visually-hidden"></h2>
      <PromoCard promo={promo} cn='promo--single' />
    </section>
  )
}
