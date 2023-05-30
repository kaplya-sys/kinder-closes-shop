import './recent-products.scss'
import ProductCard from '../product-card/product-card'

type ProductType = {
  id: number
  title: string
  price: number
  imagePath: string
  sale: boolean
}

type RecentProductsPropsType = {
  goods: ProductType[]
}

export default function RecentProducts({goods}: RecentProductsPropsType): JSX.Element {
  return (
    <section className="recent-products">
      <h2 className="recent-products__title">Недавно просмотренное</h2>
      <ul className="recent-products__list">
        {goods.map(item => {
          return (
            <li key={item.id} className="recent-products__item recent-products__item--sale">
              <ProductCard productCard={item}/>
            </li>
          )
        })}
      </ul>
      <button className="recent-products__slider-button recent-products__slider-button--prev">
        <span className="visually-hidden">Предыдущий товар</span>
      </button>
      <button className="recent-products__slider-button recent-products__slider-button--next">
        <span className="visually-hidden">Следующий товар</span>
      </button>
    </section>
  )
}