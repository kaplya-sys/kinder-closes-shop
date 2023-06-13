import {API_URL, REVALIDATE} from '@/constants/constants'
import {ProductType, PromoType} from '@/types/product-type'

export const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products`, {next: {revalidate: REVALIDATE}})

    return await res.json() as Array<ProductType>
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}

export const getPromotions = async () => {
  try {
    const res = await fetch(`${API_URL}/promotions`, {next: {revalidate: REVALIDATE}})

    return await res.json() as Array<PromoType>
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}
