"use client"

import {useCarousel} from '../hooks/useCarousel'
import ProductCard from '../product-card/product-card'
import SliderButton from '../slider-button/slider-button'
import {ProductType} from '@/types/product'
import './products.scss'

type ProductsPropsType = {
  products: Array<ProductType>
  title: string
}

export default function Products({products, title}: ProductsPropsType): JSX.Element {
  const {backwardHandler, forwardHandler, carousel} = useCarousel()

  return (
    <section className="products">
      <h2 className="products__title">{title}</h2>
      <ul className="products__list" ref={carousel}>
        {products.map(item => <ProductCard key={item.id} productCard={item} />)}
      </ul>
      <SliderButton
        label='Предыдущий товар'
        cn='products__slider-button products__slider-button--prev'
        handlerSwitchSlide={backwardHandler}
      />
      <SliderButton
        label='Следующий товар'
        cn='products__slider-button products__slider-button--next'
        handlerSwitchSlide={forwardHandler}
      />
    </section>
  )
}