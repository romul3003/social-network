import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'social-network/profile/ADD_POST'
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
const SET_STATUS = 'social-network/profile/SET_STATUS'
const DELETE_POST = 'social-network/profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS'

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
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId),
			}
		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			}
		default:
			return state
	}
}

//action creators
export const addPost = newPost => ({ type: ADD_POST, newPost })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setStatus = status => ({ type: SET_STATUS, status })
export const deletePost = postId => ({ type: DELETE_POST, postId })
const savePhotoSuccess = photos => ({ type: SAVE_PHOTO_SUCCESS, photos })

// thunk creators
export const getUserProfile = userId => async dispatch => {
	const data = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(data))
}

export const getStatus = userId => async dispatch => {
	const data = await profileAPI.getStatus(userId)
	dispatch(setStatus(data))
}

export const updateStatus = status => async dispatch => {
	const data = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const savePhoto = file => async dispatch => {
	const data = await profileAPI.savePhoto(file)
	if (data.resultCode === 0) {
		dispatch(savePhotoSuccess(data.data.photos))
	}
}

export const saveProfile = profile => async (dispatch, getState) => {
	const userId = getState().auth.userId
	const data = await profileAPI.saveProfile(profile)

	if (data.resultCode === 0) {
		dispatch(getUserProfile(userId))
	} else {
		const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
		dispatch(stopSubmit('edit-profile', { _error: message }))
		return Promise.reject(data.messages[0])
	}
}

export default profileReducer
