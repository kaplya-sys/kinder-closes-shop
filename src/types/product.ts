export interface PromoType {
	id: number
	title: string
	imagePath: string
}

export interface ProductType extends PromoType {
  price: number
  oldPrice?: number
  sale: boolean
}

export interface AuthDataType {
  email: string
  password: string
}

export interface AuthUserResponseDataType {
  userToken: string
  user: {
    name: string
  }
}

export interface RegisterDataType extends AuthDataType {
  name: string
}