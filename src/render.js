import ReactDOM from 'react-dom'
import App from './App'
import React from 'react'
import { addPost, updateNewPostText } from './redux/state'
import { BrowserRouter as Router } from 'react-router-dom'

export const rerenderEtireTree = state => {
	ReactDOM.render(
		<Router>
			<App
				state={state}
				addPost={addPost}
				updateNewPostText={updateNewPostText}
			/>
		</Router>,
		document.getElementById('root')
	)
}
