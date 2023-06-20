import { Metadata } from 'next'
import Layout from '@/components/layout/layout'
import Promotions from '@/components/promotions/promotions'
import Adventures from '@/components/adventures/adventures'
import Products from '@/components/products/products'
import Category from '@/components/category/category'
import PromoAction from '@/components/promo-action/promo-action'
import OurContacts from '@/components/our-contacts/our-contacts'
import RecentProducts from '@/components/recent-products/recent-products'
import { getProducts, getPromotions } from '@/services/productsService'
import { getAdventuresList } from '@/services/siteComponentsService'
import { AdventuresType } from '@/types/siteComponentsType'
import { ProductType, PromoType } from '@/types/productType'
import './home.scss'

export const metadata: Metadata = {
  title: 'Главная | Мерри',
  description: 'Главная страница',
}

export default async function Home(): Promise<JSX.Element> {
  const products = await getProducts() as Array<ProductType>
  const promotions = await getPromotions() as Array<PromoType>
  const adventures = await getAdventuresList() as Array<AdventuresType>

  return (
    <Layout>
      <div className="container">
        <h1 className="visually-hidden">Добро пожаловать интернет-магазина Мерри</h1>
        {promotions && <Promotions promotions={promotions} />}
        <Adventures adventures={adventures} />
        <Category />
        {products && <Products products={products} title='Популярные товары' />}
        {promotions && <PromoAction promo={{ ...promotions[3] }} />}
        <RecentProducts />
        <OurContacts />
      </div>
    </Layout>
  )
}
