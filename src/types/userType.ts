export interface AuthDataType {
  email: string
  password: string
}

export interface RegisterDataType extends AuthDataType {
  name: string
}

export interface AuthUserResponseDataType {
  user: {
    name: string
  }
}