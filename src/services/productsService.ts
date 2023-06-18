import {API_URL, REVALIDATE} from '@/constants/constants'
import {ProductType, PromoType} from '@/types/productType'

export const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products`, {next: {revalidate: REVALIDATE}})

    return await res.json() as Array<ProductType>
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}

export const getProductByID = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/products/${id}`, {next: {revalidate: REVALIDATE}})

    return await res.json() as ProductType
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
