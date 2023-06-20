import Image from 'next/image'
import Title from '../ui/title/title'
import { getAdventuresList } from '@/services/siteComponentsService'
import { AdventuresType } from '@/types/siteComponentsType'
import './adventures.scss'

export default async function Adventures(): Promise<JSX.Element> {
	const adventuresList = await getAdventuresList() as Array<AdventuresType>

	return (
		<section className="adventures">
			<Title cn="adventures__title">Преимущества работы с нами</Title>
			<ul className="adventures__list">
				{adventuresList.map(item => {
					const { id, title, imagePath, imageAlt } = item

					return (
						<li className="adventures__item" key={id}>
							<h3 className="adventures__subtitle">{title}</h3>
							<Image className="adventures__icon" src={imagePath} width={150} height={100} alt={imageAlt} />
						</li>
					)
				})}
			</ul>
		</section>
	)
}
