import Layout from "@/components/layout/layout"
import { getProductByID } from "@/services/productsService"
import { ProductType } from "@/types/productType"
import { Metadata } from "next"

type ProductPropsType = {
	params: {
		product: string
	}
}

export async function generateMetadata({ params }: ProductPropsType): Promise<Metadata> {
	const product = await getProductByID(params.product) as ProductType
	return {title: `${product.title} | Мерри`}
}

export default async function Product({ params }: ProductPropsType): Promise<JSX.Element> {
	const product = await getProductByID(params.product) as ProductType

	return (
		<Layout>
			<h1 className="title">{product.title}</h1>
		</Layout>
	)
}