const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 0 },
		{ id: 2, message: "It's my first post", likesCount: 23 },
		{ id: 3, message: 'Blabla', likesCount: 11 },
		{ id: 4, message: 'This is React, baby', likesCount: 100 },
	],
	newPostText: 'new post default',
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText,
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

export const addPost = () => ({
	type: ADD_POST,
})
export const updateNewPostText = text => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
	}
}

export const setUserProfile = profile => ({
	type: SET_USER_PROFILE,
	profile,
})

export default profileReducer
