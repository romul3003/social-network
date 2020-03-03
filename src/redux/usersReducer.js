const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
	users: [
		// {
		// 	id: 1,
		// 	followed: false,
		// 	fullName: 'Roman',
		// 	status: 'I am a boss',
		// 	location: { city: 'Kyiv', country: 'Ukraine' },
		// },
		// {
		// 	id: 2,
		// 	followed: true,
		// 	fullName: 'Sasha',
		// 	status: 'I am a boss too',
		// 	location: { city: 'Minsk', country: 'Belarus' },
		// },
		// {
		// 	id: 3,
		// 	followed: false,
		// 	fullName: 'Andrew',
		// 	status: 'I am a boss too',
		// 	location: { city: 'Riga', country: 'Latvia' },
		// },
	],
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
				users: [...state.users, ...action.users],
			}
		default:
			return state
	}
}

export const followAC = userId => ({ type: FOLLOW, userId })
export const unfollowAC = userId => ({ type: UNFOLLOW, userId })
export const setUsersAC = users => ({ type: SET_USERS, users })

export default usersReducer
