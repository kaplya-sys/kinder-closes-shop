//"use client"

//import { useState } from 'react'
import { GetStaticProps, Metadata } from 'next'
import Layout from '@/components/layout/layout'
import Promotions from '@/components/promotions/promotions'
import Adventures from '@/components/adventures/adventures'
import Products from '@/components/products/products'
import Category from '@/components/category/category'
import PromoAction from '@/components/promo-action/promo-action'
import OurContacts from '@/components/our-contacts/our-contacts'
import { ProductType } from '@/types/product'
import './home.scss'

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
    title: 'Ласты «искупайся»',
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

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Главная страница',
}

type HomePropsType = {
  data: Array<ProductType>
}

export default function Home({ data }: HomePropsType): JSX.Element {
  //const [recentProducts, SetRecentProducts] = useState<Array<ProductType>>([])
  console.log('cl: ',data)
  const recentProducts:Array<ProductType> = []
  return (
    <Layout>
      <main className="main">
        <div className="container">
          <h1 className="visually-hidden">Добро пожаловать интернет-магазина Мерри</h1>
          <Promotions promoData={promoList} />
          <Adventures />
          <Category />
          <Products products={products} title='Популярные товары' />
          <PromoAction promo={{ ...promoList[3] }} />
          <Products products={recentProducts} title='Недавно просмотренное' />
          <OurContacts />
        </div>
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/products')
  const data = await res.json()
  return {
    props: data,
    revalidate: 60
  }
}