import './pagination.scss'

type PaginationPropsType = {
	arr: []
}

export default function Pagination({arr}: PaginationPropsType) {
	return (
		<ol className="pagination">
			{arr.map(() => (
				<li className="pagination__item pagination__item--active">
					<button className="pagination__button">
						<span className="visually-hidden">1 список</span>
					</button>
				</li>
			))}
		</ol>
	)
}
