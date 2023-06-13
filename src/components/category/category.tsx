"use client"

import Image from 'next/image'
import { useCarousel } from '@/hooks/useCarousel'
import Title from '../ui/title/title'
import './category.scss'

export default function Category() {
  const { backwardHandler, forwardHandler, carousel } = useCarousel()

  return (
    <section className="category">
      <div className="category__wrapper">
        <Title cn="category__title">Поиск по категориям</Title>
        <div className="category__slider-wrapper">
          <button
            className="category__slider-button category__slider-button--prev"
            type="button"
            onClick={backwardHandler}
          >
            <span className="visually-hidden">Предыдущая категория</span>
          </button>
          <button
            className="category__slider-button category__slider-button--next"
            type="button"
            onClick={forwardHandler}
          >
            <span className="visually-hidden">Следующая категория</span>
          </button>
        </div>
      </div>
      <ul className="category__list" ref={carousel}>
        <li className="category__item">
          <Image className="category__image" src="/clothes/clothes-1.jpg" width={215} height={244} alt="" />
          <div className="category__content">
            <h3 className="category__subtitle">Новинки</h3>
            <button className="category__button">
              <span className="visually-hidden">Перейти</span>
            </button>
          </div>
        </li>
        <li className="category__item">
          <Image className="category__image" src="/clothes/clothes-2.jpg" width={215} height={244} alt="" />
          <div className="category__content">
            <h3 className="category__subtitle">Акции</h3>
            <button className="category__button">
              <span className="visually-hidden">Перейти</span>
            </button>
          </div>
        </li>
        <li className="category__item">
          <Image className="category__image" src="/clothes/clothes-3.jpg" width={215} height={244} alt="" />
          <div className="category__content">
            <h3 className="category__subtitle">Шапки</h3>
            <button className="category__button">
              <span className="visually-hidden">Перейти</span>
            </button>
          </div>
        </li>
        <li className="category__item">
          <Image className="category__image" src="/clothes/clothes-4.jpg" width={215} height={244} alt="" />
          <div className="category__content">
            <h3 className="category__subtitle">Купальники</h3>
            <button className="category__button">
              <span className="visually-hidden">Перейти</span>
            </button>
          </div>
        </li>
      </ul>
      <ol className="category__pagination">
        <li className="category__pagination-item category__pagination-item--active">
          <button className="category__pagination-button">
            <span className="visually-hidden">1 список</span>
          </button>
        </li>
        <li className="category__pagination-item">
          <button className="category__pagination-button">
            <span className="visually-hidden">2 список</span>
          </button>
        </li>
      </ol>
    </section>
  )
}
