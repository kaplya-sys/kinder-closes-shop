import { BASKET, RECENT } from '@/constants/constants'
import { ProductType } from '@/types/productType'
import { checkPresence } from '@/utils/сheckPresence'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type StateType = {
  recentProducts: Array<ProductType>
  basket: Array<ProductType>
}

const initialState = {
  recentProducts: JSON.parse(localStorage.getItem(RECENT) ?? '[]'),
  basket: JSON.parse(localStorage.getItem(BASKET) ?? '[]')
} as StateType

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addToRecent: (state, actions: PayloadAction<ProductType>) => {
      state.recentProducts = checkPresence(state.recentProducts, actions.payload)
      localStorage.setItem(RECENT, JSON.stringify(checkPresence(state.recentProducts, actions.payload)))
    },
    addToBasket: (state, action: PayloadAction<ProductType>) => {
      state.basket.push(action.payload)
      localStorage.setItem(BASKET, JSON.stringify(state.basket))
    },
    removeFromBasket: (state, action: PayloadAction<number>) => {
      state.basket = state.basket.filter(item => item.id !== action.payload)
      localStorage.setItem(BASKET, JSON.stringify(state.basket))
    }
  },
})

export const productsActions = productsSlice.actions
export const productsReducer =  productsSlice.reducer