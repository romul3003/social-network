import React from 'react'
import * as serviceWorker from './serviceWorker'
import './index.css'
import store from './redux/state'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const rerenderEntireTree = state => {
	ReactDOM.render(
		<Router>
			<App
				state={store._state}
				addPost={store.addPost}
				updateNewPostText={store.updateNewPostText}
			/>
		</Router>,
		document.getElementById('root')
	)
}

rerenderEntireTree(store._state)

store.subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
