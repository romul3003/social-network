import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	getUsers,
	follow,
	unfollow,
	setCurrentPage,
} from '../../redux/usersReducer'
import Users from './Users'
import Preoader from '../Preloader/Preoader'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = pageNumber => {
		this.props.getUsers(pageNumber, this.props.pageSize)
		this.props.setCurrentPage(pageNumber)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? <Preoader /> : null}
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

const mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPage,
	getUsers,
})(UsersContainer)
