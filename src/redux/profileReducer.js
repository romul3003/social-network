import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 0 },
		{ id: 2, message: "It's my first post", likesCount: 23 },
		{ id: 3, message: 'Blabla', likesCount: 11 },
		{ id: 4, message: 'This is React, baby', likesCount: 100 },
	],
	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					...state.posts,
					{
						id: 5,
						message: action.newPost,
						likesCount: 0,
					},
				],
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status,
			}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		default:
			return state
	}
}

//action creators
export const addPost = newPost => ({
	type: ADD_POST,
	newPost,
})

export const setUserProfile = profile => ({
	type: SET_USER_PROFILE,
	profile,
})

export const setStatus = status => {
	return {
		type: SET_STATUS,
		status,
	}
}

// thunk creators
export const getUserProfile = userId => {
	return dispatch => {
		profileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)))
	}
}

export const getStatus = userId => dispatch => {
	profileAPI.getStatus(userId).then(data => dispatch(setStatus(data)))
}

export const updateStatus = status => dispatch => {
	profileAPI.updateStatus(status).then(data => {
		if (data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}

export default profileReducer
