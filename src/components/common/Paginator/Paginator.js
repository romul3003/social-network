import React from 'react'
import classes from './Paginator.module.css'

const Paginator = ({
	currentPage,
	onPageChanged,
	totalUsersCount,
	pageSize,
}) => {
	const pagesCount = Math.ceil(totalUsersCount / pageSize)

	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={classes.paginationList}>
			{pages.map(page => (
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
		</div>
	)
}

export default Paginator
