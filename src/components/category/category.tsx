import Image from 'next/image'
import Title from '../title/title'
import './category.scss'

export default function Category() {
  return (
    <section className="category">
      <Title cn="category__title" title="Поиск по категориям" />
      <div className="category__slider-wrapper">
        <button className="category__slider-button category__slider-button--prev">
          <span className="visually-hidden">Предыдущая категория</span>
        </button>
        <button className="category__slider-button category__slider-button--next">
          <span className="visually-hidden">Следующая категория</span>
        </button>
      </div>
      <ul className="category__list">
        <li className="category__item">
          <Image className="category__image" src="/clothes/clothes-1.jpg" width={215} height={244} alt="" />
          <div className="category__wrapper">
            <h3 className="category__subtitle">Новинки</h3>
            <button className="category__button">
              <span className="visually-hidden">Перейти</span>
            </button>
          </div>
        </li>
        <li className="category__item">
          <Image className="category__image" src="/clothes/clothes-2.jpg" width={215} height={244} alt="" />
          <div className="category__wrapper">
            <h3 className="category__subtitle">Акции</h3>
            <button className="category__button">
              <span className="visually-hidden">Перейти</span>
            </button>
          </div>
        </li>
        <li className="category__item">
          <Image className="category__image" src="/clothes/clothes-3.jpg" width={215} height={244} alt="" />
          <div className="category__wrapper">
            <h3 className="category__subtitle">Шапки</h3>
            <button className="category__button">
              <span className="visually-hidden">Перейти</span>
            </button>
          </div>
        </li>
        <li className="category__item">
          <Image className="category__image" src="/clothes/clothes-4.jpg" width={215} height={244} alt="" />
          <div className="category__wrapper">
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
