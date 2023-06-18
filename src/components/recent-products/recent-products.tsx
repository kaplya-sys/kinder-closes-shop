"use client"

import { useAppSelector } from '@/redux/hooks'
import Products from '../products/products'

export default function RecentProducts (): JSX.Element {
  const {recentProducts} = useAppSelector(state => state.products)

  return (
    <>
      {!!recentProducts.length && <Products products={recentProducts} title='Недавно просмотренное' />}
    </>
  )
}