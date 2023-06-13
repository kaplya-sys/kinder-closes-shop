import {AuthDataType, AuthUserResponseDataType, RegisterDataType} from "@/types/product"

export const authorization = async (data: AuthDataType) => {
  try {
    const res = await fetch('/auth/sing-in', {
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
    const res = await fetch('/auth/sing-up', {
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