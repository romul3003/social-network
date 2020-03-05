import React, { Component } from 'react'
import * as axios from 'axios'
import classes from './users.module.css'
import userPhoto from '../../assets/images/user.png'

class Users extends Component {
	componentDidMount() {
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}

	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		const pagesCount = Math.ceil(
			this.props.totalUsersCount / this.props.pageSize
		)

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
								this.props.currentPage === page ? classes.selectedPage : ''
							} ${classes.page}`.trim()}
							key={page}
							onClick={() => this.onPageChanged(page)}
						>
							{page}
						</span>
					))}
				</div>
				{this.props.users.map(user => (
					<div key={user.id}>
						<span>
							<div>
								<img
									src={
										user.photos.small !== null ? user.photos.small : userPhoto
									}
									alt={user.name}
									className={classes.userPhoto}
								/>
							</div>
							<div>
								{user.followed ? (
									<button onClick={() => this.props.unfollow(user.id)}>
										Unfollow
									</button>
								) : (
									<button onClick={() => this.props.follow(user.id)}>
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
}

export default Users
