import React from 'react'
import './index.css'
import store from './redux/reduxStore'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const rerenderEntireTree = state => {
	ReactDOM.render(
		<Router>
			<App state={state} dispatch={store.dispatch.bind(store)} store={store} />
		</Router>,
		document.getElementById('root')
	)
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
	const state = store.getState()
	rerenderEntireTree(state)
})
