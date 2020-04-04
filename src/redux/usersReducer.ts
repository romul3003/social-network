import { usersAPI } from '../api/api'
import { updataObjectInArray } from '../utils/objectHelpers'
import {UserType} from '../types/types'

const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_USERS = 'social-network/users/SET_USERS'
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS =
	'social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
	users: [] as Array<UserType>,
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [] as Array<number>, // array of users ids
}

type Initialstate = typeof initialState

const usersReducer = (state = initialState, action: any): Initialstate => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updataObjectInArray(state.users, action.userId, 'id', {
					followed: true,
				}),
			}
		case UNFOLLOW:
			return {
				...state,
				users: updataObjectInArray(state.users, action.userId, 'id', {
					followed: false,
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
type FollowSuccess = {
	type: typeof FOLLOW,
	userId: number,
}
export const followSuccess = (userId: number): FollowSuccess => ({ type: FOLLOW, userId })

type UnfollowSuccessType = {
	type: typeof UNFOLLOW,
	userId: number,
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({ type: UNFOLLOW, userId })

type SetUsersType = {
	type: typeof SET_USERS,
	users: Array<UserType>,
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({ type: SET_USERS, users })

type SetCurrentPageType = {
	type: typeof SET_CURRENT_PAGE,
	currentPage: number,
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})

type SetTotalUsersCountType = {
	type: typeof SET_TOTAL_USERS_COUNT,
	count: number,
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({
	type: SET_TOTAL_USERS_COUNT,
	count: totalUsersCount,
})

type toggleIsFetchingType = {
	type: typeof TOGGLE_IS_FETCHING,
	isFetching: boolean,
}

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
})

type toggleIsFollowingProgressType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching: boolean,
	userId: number,
}

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgressType => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
})

// thunk creators
export const requestUsers = (page: number, pageSize: number) => {
	return async (dispatch: any) => {
		dispatch(toggleIsFetching(true))
		dispatch(setCurrentPage(page))

		const data = await usersAPI.getUsers(page, pageSize)
		dispatch(toggleIsFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalUsersCount(data.totalCount))
	}
}

const follorUnfollowFlow = async (
	dispatch: any,
	userId: number,
	apiMethod: any,
	actionCreator: any
) => {
	dispatch(toggleIsFollowingProgress(true, userId))
	const data = await apiMethod(userId)

	if (data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleIsFollowingProgress(false, userId))
}

export const follow = (userId: number) => {
	return async (dispatch: any) => {
		follorUnfollowFlow(
			dispatch,
			userId,
			usersAPI.follow.bind(usersAPI),
			followSuccess
		)
	}
}

export const unfollow = (userId: number) => {
	return async (dispatch: any) => {
		follorUnfollowFlow(
			dispatch,
			userId,
			usersAPI.unfollow.bind(usersAPI),
			unfollowSuccess
		)
	}
}

export default usersReducer
