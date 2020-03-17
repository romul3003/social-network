import React, { useState } from 'react'
import classes from './Paginator.module.css'

const Paginator = ({
	currentPage,
	onPageChanged,
	totalItemsCount,
	pageSize,
	portionSize = 10,
}) => {
	const pagesCount = Math.ceil(totalItemsCount / pageSize)

	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	return (
		<div className={classes.paginationList}>
			{portionNumber > 1 && (
				<button onClick={() => setPortionNumber(portionNumber - 1)}>
					PREV
				</button>
			)}
			{pages
				.filter(page => {
					return page >= leftPortionPageNumber && page <= rightPortionPageNumber
				})
				.map(page => (
					<span
						className={`${currentPage === page ? classes.selectedPage : ''} ${
							classes.page
						}`.trim()}
						key={page}
						onClick={() => onPageChanged(page)}
					>
						{page}
					</span>
				))}
			{portionCount > portionNumber && (
				<button onClick={() => setPortionNumber(portionNumber + 1)}>
					NEXT
				</button>
			)}
		</div>
	)
}

export default Paginator
