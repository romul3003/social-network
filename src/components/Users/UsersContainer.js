import React, { Component } from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, requestUsers } from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
// import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import {
	getUsers,
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount,
} from '../../redux/usersSelectors'

class UsersContainer extends Component {
	componentDidMount() {
		const { currentPage, pageSize } = this.props
		this.props.requestUsers(currentPage, pageSize)
	}

	onPageChanged = pageNumber => {
		const { pageSize } = this.props
		this.props.requestUsers(pageNumber, pageSize)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader /> : null}
				<Users
					onPageChanged={this.onPageChanged}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		)
	}
}

// const mapStateToProps = state => {
// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress,
// 	}
// }

const mapStateToProps = state => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		requestUsers,
	})
	// withAuthRedirect
)(UsersContainer)
