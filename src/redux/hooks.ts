import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { productsActions } from './slices/productsSlice'

const actions = {...productsActions}

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}