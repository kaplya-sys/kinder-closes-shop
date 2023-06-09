"use client"

import {MouseEvent} from 'react'
import {Promo} from '@/types/product'
import './pagination.scss'

type PaginationPropsType = {
	elementList: Array<Promo>
	onClick: (e: MouseEvent) => void
	index?: number
	cn?: string
}

export default function Pagination({elementList, onClick, index, cn}: PaginationPropsType): JSX.Element {
	return (
		<ol className={`${cn} pagination`}>
			{elementList.map(({id}) => (
				<li className={`pagination__item ${id === index? 'pagination__item--active': ''}`} key={id}>
					<button className="pagination__button" onClick={(e) => onClick(e)} name={String(id)}>
						<span className="visually-hidden">{id}</span>
					</button>
				</li>
			))}
		</ol>
	)
}
