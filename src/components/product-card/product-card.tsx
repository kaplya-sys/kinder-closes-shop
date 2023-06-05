import Image from 'next/image'
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

export default function ProductCard({productCard}: productCardPropsType) {
  const {title, price, imagePath, oldPrice, sale} = productCard

  return (
    <li className={`card ${sale && "card--sale"}`}>
      <h3 className="card__subtitle">{title}</h3>
      <Image className="card__image" src={imagePath} width={270} height={325} alt={`${title}.`} />
      {sale && <span className="card__old-price">{oldPrice}₽</span>}
      <div className="card__wrapper">
        <span className="card__price">{price}₽</span>
        <button className="card__button" type="button">В корзину</button>
      </div>
    </li>
  )
}