import { ProductType } from '@/types/productType'

export const getOrderPrice = (arr: Array<ProductType>): number => {
  return arr.reduce((sum, item) => item.price + sum, 0)
}