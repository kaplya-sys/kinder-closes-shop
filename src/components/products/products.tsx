"use client"

import {useCarousel} from '../../hooks/useCarousel'
import ProductCard from '../product-card/product-card'
import SliderButton from '../ui/slider-button/slider-button'
import Title from '../ui/title/title'
import {ProductType} from '@/types/product-type'
import './products.scss'

type ProductsPropsType = {
  products: Array<ProductType>
  title: string
}

export default function Products({products, title}: ProductsPropsType): JSX.Element {
  const {backwardHandler, forwardHandler, carousel} = useCarousel()

  return (
    <section className="products">
      <Title cn="products__title">{title}</Title>
      <ul className="products__list" ref={carousel}>
        {products.map(item => <ProductCard key={item.id} productCard={item} />)}
      </ul>
      <SliderButton
        cn='products__slider-button products__slider-button--prev'
        handlerSwitchSlide={backwardHandler}
      >
        Предыдущий товар
      </SliderButton>
      <SliderButton
        cn='products__slider-button products__slider-button--next'
        handlerSwitchSlide={forwardHandler}
      >
        Следующий товар
      </SliderButton>
    </section>
  )
}