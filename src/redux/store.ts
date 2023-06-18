import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './slices/productsSlice'
import { userApi } from './api/userApi'
import { productsApi } from './api/productsApi'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        [userApi.reducerPath]: userApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([userApi.middleware, productsApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch