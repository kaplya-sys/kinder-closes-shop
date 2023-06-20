import Layout from '@/components/layout/layout'
import { getProductByID } from '@/services/productsService'
import { ProductType } from '@/types/productType'
import { Metadata } from 'next'
import Link from 'next/link'

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
			<div className="breadcrumbs">
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link className="breadcrumbs__link" href="">Главная</Link>
					</li>
				</ul>
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link className="breadcrumbs__link" href="">Одежда</Link>
					</li>
				</ul>
				<ul className="breadcrumbs__list">
					<li className="breadcrumbs__item">
						<Link className="breadcrumbs__link" href=""></Link>
					</li>
				</ul>
			</div>
			<h1 className="title">{product.title}</h1>
			<section className="ptoduct">
				
			</section>
		</Layout>
	)
}