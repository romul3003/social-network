const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 0 },
				{ id: 2, message: "It's my first post", likesCount: 23 },
				{ id: 3, message: 'Blabla', likesCount: 11 },
				{ id: 4, message: 'This is React, baby', likesCount: 100 },
			],
			newPostText: 'new post default',
		},
		dialogPage: {
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Andrey' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Victor' },
				{ id: 6, name: 'Valera' },
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Yo!' },
			],
		},
	},
	_callSubscriber() {
		// eslint-disable-next-line no-console
		console.log('State changed')
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			const newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			}

			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText
			this._callSubscriber(this._state)
		}
	},
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = text => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
	}
}

export default store