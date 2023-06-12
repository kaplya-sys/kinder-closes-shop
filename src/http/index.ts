import { API_URL } from '@/constants/constants'
import axios, { AxiosError, AxiosResponse, HttpStatusCode, InternalAxiosRequestConfig } from 'axios'

interface ModifiedInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  _isRetry: boolean
}

interface ModifiedAxiosError extends AxiosError {
  config?: ModifiedInternalAxiosRequestConfig
}

export const http = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

http.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token: string | null = localStorage.getItem('token')

    if (token) {
        config.headers!.Authorization = token
    }
    return config
})

http.interceptors.response.use((config: AxiosResponse) => {
    return config
  },
  async (error: ModifiedAxiosError) => {
    const originalRequest = {...error.config}
    originalRequest._isRetry = true
    
    if (error.response?.status === HttpStatusCode.Unauthorized && error.config && !error.config._isRetry) {
      try {
        const res = await http.get('/refresh')
        localStorage.setItem('token', res.data.accessToken)
        return http.request(originalRequest)
      } catch (error) {
        const e = error as AxiosError<Error>
        console.log(e.response?.data.message)
      }
    }
    throw error
  }
)