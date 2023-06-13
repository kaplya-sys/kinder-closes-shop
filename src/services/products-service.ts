import {REVALIDATE} from '@/constants/constants'
import {ProductType, PromoType} from '@/types/product'

export const getProducts = async () => {
  try {
    const res = await fetch('http://localhost:4200/products', {next: {revalidate: REVALIDATE}})

    return await res.json() as Array<ProductType>
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}

export const getPromotions = async () => {
  try {
    const res = await fetch('http://localhost:4200/promotions', {next: {revalidate: REVALIDATE}})

    return await res.json() as Array<PromoType>
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}
