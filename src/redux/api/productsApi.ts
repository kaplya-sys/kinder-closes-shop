import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@/constants/constants'
import { ProductType } from '@/types/productType'

export const productsApi = createApi({
  reducerPath: 'product/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`
  }),
  endpoints: build => ({
    searchProducts: build.query<ProductType, string>({
      query: (param: string) => ({
        url: '/products',
        params: {
          title: param
        }
      })
    })
  })
})

export const { useLazySearchProductsQuery } = productsApi