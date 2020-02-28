import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const posts = [
	{ id: 1, message: 'Hi, how are you?', likesCount: 0 },
	{ id: 2, message: "It's my first post", likesCount: 23 },
	{ id: 3, message: 'Blabla', likesCount: 11 },
	{ id: 4, message: 'This is React, baby', likesCount: 100 },
]

const dialogs = [
	{ id: 1, name: 'Dimych' },
	{ id: 2, name: 'Andrey' },
	{ id: 3, name: 'Sveta' },
	{ id: 4, name: 'Sasha' },
	{ id: 5, name: 'Victor' },
	{ id: 6, name: 'Valera' },
]

const messages = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How are you?' },
	{ id: 3, message: 'Yo!' },
]

ReactDOM.render(
	<App posts={posts} dialogs={dialogs} messages={messages} />,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
