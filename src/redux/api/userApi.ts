import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@/constants/constants'
import { AuthDataType, AuthUserResponseDataType, RegisterDataType } from '@/types/userType'

export const userApi = createApi({
  reducerPath: 'user/api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`
  }),
  endpoints: build => ({
    userAuth: build.query<AuthUserResponseDataType, AuthDataType>({
      query: () => ({
        url: '/auth/sing-in'
      })
    }),
    userRegister: build.query<AuthUserResponseDataType, RegisterDataType>({
      query: () => ({
        url: '/auth/sing-up'
      })
    })
  })
})

export const { useLazyUserRegisterQuery, useLazyUserAuthQuery } = userApi
