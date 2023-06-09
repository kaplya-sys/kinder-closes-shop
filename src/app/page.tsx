"use client"

import {useState} from 'react'
import Promotions from '@/components/promotions/promotions'
import Adventures from '@/components/adventures/adventures'
import Products from '@/components/products/products'
import Category from '@/components/category/category'
import PromoCard from '@/components/promo-card/promo-card'
import OurContacts from '@/components/our-contacts/our-contacts'
import {ProductType} from '@/types/product'
import './page.scss'

const products = [
  {
    id: 1,
    title: 'Шапка «Совенок вязанные ушки»',
    price: 800,
    oldPrice: 650,
    imagePath: '/clothes/clothes-5.jpg',
    sale: true
  },
  {
    id: 2,
    title: 'Боди «Белое облачко»',
    price: 600,
    imagePath: '/clothes/clothes-6.jpg',
    sale: false
  },
  {
    id: 3,
    title: 'Пижама «желуди»',
    price: 1200,
    oldPrice: 600,
    imagePath: '/clothes/clothes-7.jpg',
    sale: true
  },
  {
    id: 4,
    title: 'Футболка «мамина дочка»',
    price: 600,
    oldPrice: 650,
    imagePath: '/clothes/clothes-8.jpg',
    sale: true
  },
  {
    id: 5,
    title: 'Рубашка «деловой парень»',
    price: 800,
    oldPrice: 1750,
    imagePath: '/clothes/clothes-9.jpg',
    sale: true
  },
  {
    id: 6,
    title: 'Ласты «искупнись»',
    price: 1800,
    oldPrice: 2000,
    imagePath: '/clothes/clothes-10.jpg',
    sale: true
  }
]

const promoList = [
  {
    id: 1,
    title: ['Черная пятница на всю коллекцию!', <br />, <span className="promo__addition">позволь себе больше</span>],
    imgPath: '/banner/banner-1.jpg',
  },
  {
    id: 2,
    title: 'Оставьте заявку сегодня и получите скидку завтра!',
    imgPath: '/banner/banner-2.jpg',
  },
  {
    id: 3,
    title: 'Черная пятница на всю коллекцию!',
    imgPath: '/banner/banner-3.jpg',
  },
  {
    id: 4,
    title: 'Оставьте заявку сегодня и получите скидку завтра!',
    imgPath: '/banner/banner-4.jpg',
  }
]

export default function Home() {
  const [recentProducts, SetRecentProducts] = useState<Array<ProductType>>([])

  return (
    <div className="container">
      <Promotions promoData={promoList} />
      <Adventures />
      <Category />
      <Products products={products} title='Популярные товары' />
      <section className="">
        <h2 className=""></h2>
        <PromoCard promoData={{...promoList[3]}} cn='promo--single' />
      </section>
      <Products products={recentProducts} title='Недавно просмотренное' />
      <OurContacts />
    </div>
  )
}
