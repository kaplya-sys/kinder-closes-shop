import { API_URL } from "@/constants/constants"
import { AuthDataType, AuthUserResponseDataType, RegisterDataType } from "@/types/userType"


export const authorization = async (data: AuthDataType) => {
  try {
    const res = await fetch(`${API_URL}/auth/sing-in`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return await res.json() as AuthUserResponseDataType
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}

export const registration = async (data: RegisterDataType) => {
  try {
    const res = await fetch(`${API_URL}/auth/sing-up`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

    return await res.json() as AuthUserResponseDataType
  } catch (error) {
    const e = error as Error
    console.log(e.message)
  }
}