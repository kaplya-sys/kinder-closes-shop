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
