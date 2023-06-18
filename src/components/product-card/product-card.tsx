"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useAppActions } from '@/redux/hooks'
import './product-card.scss'

type ProductType = {
  id: number
  title: string
  price: number
  oldPrice?: number
  imagePath: string
  sale: boolean
}

type productCardPropsType = {
  productCard: ProductType
}

export default function ProductCard({ productCard }: productCardPropsType) {
  const { id, title, price, imagePath, oldPrice, sale } = productCard
  const {addToBasket, addToRecent} = useAppActions()

  return (
    <li className={`card ${sale && "card--sale"}`}>
      <Link className="card__link" href={`/catalog/${id}`} onClick={() => addToRecent(productCard)}>
        <h3 className="card__subtitle">{title}</h3>
        <Image className="card__image" src={imagePath} width={270} height={325} alt={`${title}.`} />
      </Link>
      {sale && <span className="card__old-price">{oldPrice}₽</span>}
      <div className="card__wrapper">
        <span className="card__price">{price}₽</span>
        <button className="card__button" type="button" onClick={() => addToBasket(productCard)}>В корзину</button>
      </div>
    </li>
  )
}