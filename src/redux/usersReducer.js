import { usersAPI } from '../api/api'

const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_USERS = 'social-network/users/SET_USERS'
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS =
	'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: true }
					}
					return user
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return { ...user, followed: false }
					}
					return user
				}),
			}
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId),
			}
		default:
			return state
	}
}

// action creators
export const followSuccess = userId => ({ type: FOLLOW, userId })
export const unfollowSuccess = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setCurrentPage = currentPage => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})
export const setTotalUsersCount = totalUsersCount => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount,
})
export const toggleIsFetching = isFetching => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
})
export const toggleIsFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
})

// thunk creators
export const requestUsers = (page, pageSize) => {
	return dispatch => {
		dispatch(toggleIsFetching(true))
		dispatch(setCurrentPage(page))

		usersAPI.getUsers(page, pageSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
		})
	}
}

export const follow = userId => {
	return dispatch => {
		dispatch(toggleIsFollowingProgress(true, userId))

		usersAPI.follow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userId))
			}
			dispatch(toggleIsFollowingProgress(false, userId))
		})
	}
}

export const unfollow = userId => {
	return dispatch => {
		dispatch(toggleIsFollowingProgress(true, userId))

		usersAPI.unfollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowSuccess(userId))
			}
			dispatch(toggleIsFollowingProgress(false, userId))
		})
	}
}

export default usersReducer
