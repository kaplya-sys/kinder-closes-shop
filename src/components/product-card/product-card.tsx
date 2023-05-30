import Image from 'next/image'

type ProductType = {
  id: number
  title: string
  price: number
  imagePath: string
  sale: boolean
}

type productCardPropsType = {
  productCard: ProductType
}

export default function ProductCard({productCard}: productCardPropsType) {
  const {title, price, imagePath} = productCard

  return (
    <>
      <h3 className="recent-products__subtitle">{title}</h3>
      <Image className="recent-products__image" src={`/images/${imagePath}`} width={270} height={325} alt={`${title}.`} />
      <div className="recent-products__price-wrapper">
        <span className="recent-products__price">{price}₽</span>
        <button className="recent-products__button" type="button">В корзину</button>
      </div>
    </>
  )
}