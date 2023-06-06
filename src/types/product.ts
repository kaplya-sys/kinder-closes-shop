export type ProductType = {
  id: number
  title: string
  price: number
  oldPrice?: number
  imagePath: string
  sale: boolean
}

export type Promo = {
	id: number
	title: string | Array<string | JSX.Element>
	imgPath: string
}