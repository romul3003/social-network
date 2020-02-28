import { rerenderEtireTree } from '../render'

const state = {
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
}

export const addPost = () => {
	const newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0,
	}

	state.profilePage.posts.push(newPost)
	state.profilePage.newPostText = ''
	rerenderEtireTree(state)
}

export const updateNewPostText = newText => {
	state.profilePage.newPostText = newText
	rerenderEtireTree(state)
}

export default state
