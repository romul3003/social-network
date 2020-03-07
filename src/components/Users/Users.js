import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'

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
							<NavLink to={'/profile/' + user.id}>
								<img
									src={
										user.photos.small !== null ? user.photos.small : userPhoto
									}
									alt={user.name}
									className={classes.userPhoto}
								/>
							</NavLink>
						</div>
						<div>
							{user.followed ? (
								<button
									disabled={props.followingInProgress.some(
										id => id === user.id
									)}
									onClick={() => {
										props.toggleIsFollowingProgress(true, user.id)
										usersAPI.unfollowUser(user.id).then(data => {
											if (data.resultCode === 0) {
												props.unfollow(user.id)
											}
											props.toggleIsFollowingProgress(false, user.id)
										})
									}}
								>
									Unfollow
								</button>
							) : (
								<button
									disabled={props.followingInProgress.some(
										id => id === user.id
									)}
									onClick={() => {
										props.toggleIsFollowingProgress(true, user.id)
										usersAPI.followUser(user.id).then(data => {
											if (data.resultCode === 0) {
												props.follow(user.id)
											}
											props.toggleIsFollowingProgress(false, user.id)
										})
									}}
								>
									Follow
								</button>
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
