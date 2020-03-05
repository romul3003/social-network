import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'

const Users = props => {
	const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div className={classes.wrap}>
			<div className={classes.paginationList}>
				{pages.map(page => (
					<span
						className={`${
							props.currentPage === page ? classes.selectedPage : ''
						} ${classes.page}`.trim()}
						key={page}
						onClick={() => props.onPageChanged(page)}
					>
						{page}
					</span>
				))}
			</div>
			{props.users.map(user => (
				<div key={user.id}>
					<span>
						<div>
							<img
								src={user.photos.small !== null ? user.photos.small : userPhoto}
								alt={user.name}
								className={classes.userPhoto}
							/>
						</div>
						<div>
							{user.followed ? (
								<button onClick={() => props.unfollow(user.id)}>
									Unfollow
								</button>
							) : (
								<button onClick={() => props.follow(user.id)}>Follow</button>
							)}
						</div>
					</span>
					<span>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</span>
					<span>
						<div>{'user.location.country'}</div>
						<div>{'user.location.city'}</div>
					</span>
				</div>
			))}
		</div>
	)
}

export default Users
