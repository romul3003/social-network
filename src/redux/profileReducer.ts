import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'social-network/profile/ADD_POST'
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE'
const SET_STATUS = 'social-network/profile/SET_STATUS'
const DELETE_POST = 'social-network/profile/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS'

type PostType = {
	id: number,
	message: string,
	likesCount: number,
}

type ContactsType = {
	github: string,
	vk: string,
	facebook: string,
	instagram: string,
	twitter: string,
	website: string,
	youtube: string,
	mainLink: string,
}

type PhotosType = {
	small: string | null,
	large: string | null,
}

type ProfileType = {
	userId: number,
	lookingForAJob: boolean,
	lookingForAJobDescription: string,
	fullName: string,
	contacts: ContactsType,
	photos: PhotosType,
}

const initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 0 },
		{ id: 2, message: "It's my first post", likesCount: 23 },
		{ id: 3, message: 'Blabla', likesCount: 11 },
		{ id: 4, message: 'This is React, baby', likesCount: 100 },
	] as Array<PostType>,
	profile: null as ProfileType | null,
	status: '',
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
				profile: { ...state.profile, photos: action.photos } as ProfileType,
			}
		default:
			return state
	}
}

//action creators
type addPostType = {
	type: typeof ADD_POST,
	newPost: string,
}
export const addPost = (newPost: string): addPostType  => ({ type: ADD_POST, newPost })

type setUserProfileType = {
	type: typeof SET_USER_PROFILE,
	profile: ProfileType,
}
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({ type: SET_USER_PROFILE, profile })

type setStatusType = {
	type: typeof SET_STATUS,
	status: string,
}
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status })

type deletePostType = {
	type: typeof DELETE_POST,
	postId: number,
}
export const deletePost = (postId: number): deletePostType => ({ type: DELETE_POST, postId })

type savePhotoSuccessType = {
	type: typeof SAVE_PHOTO_SUCCESS,
	photos: PhotosType,
}
const savePhotoSuccess = (photos: PhotosType): savePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos })

// thunk creators
export const getUserProfile = (userId: number) => async (dispatch: any) => {
	try {
		const data = await profileAPI.getProfile(userId)
		dispatch(setUserProfile(data))
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log('OOooops!!!', e.message)
	}
}

export const getStatus = (userId: number) => async (dispatch: any) => {
	try {
		const data = await profileAPI.getStatus(userId)
		dispatch(setStatus(data))
	} catch (e) {
		// eslint-disable-next-line no-console
		console.log('OOooops!!!', e.message)
	}
}

export const updateStatus = (status: string) => async (dispatch: any) => {
	const data = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const savePhoto = (file: any) => async (dispatch: any) => {
	const data = await profileAPI.savePhoto(file)
	if (data.resultCode === 0) {
		dispatch(savePhotoSuccess(data.data.photos))
	}
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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
