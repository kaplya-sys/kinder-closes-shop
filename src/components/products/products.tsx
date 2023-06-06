import './products.scss'
import ProductCard from '../product-card/product-card'
import SliderButton from '../slider-button/slider-button'

type ProductType = {
  id: number
  title: string
  price: number
  oldPrice?: number
  imagePath: string
  sale: boolean
}

type ProductsPropsType = {
  products: ProductType[]
}

export default function Products({products}: ProductsPropsType): JSX.Element {
  return (
    <section className="products">
      <h2 className="products__title">Популярные товары</h2>
      <ul className="products__list">
        {products.map(item => <ProductCard key={item.id} productCard={item} />)}
      </ul>
      <SliderButton label='Предыдущий товар' cn='products__slider-button products__slider-button--prev' />
      <SliderButton label='Следующий товар' cn='products__slider-button products__slider-button--next' />
    </section>
  )
}