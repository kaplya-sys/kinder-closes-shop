import { AxiosResponse } from 'axios'
import { http } from '../http'

type AuthDataType = {
  email: string
  password: string
}

type AuthUserResponseDataType = {
  userToken: string
  user: {
    name: string
  }
}

type CreateUserDataType = {
  email: string
  name: string
  password: string
}

export const authorization = async (data: AuthDataType): Promise<AxiosResponse<AuthUserResponseDataType>> => {
    return await http.post<AuthUserResponseDataType>('/auth/sing-in', data)
}

export const registration = async (data: CreateUserDataType): Promise<void> => {
    return await http.post('/auth/sing-up', data)
}