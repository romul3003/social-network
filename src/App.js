import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

function App(props) {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper__content">
				<Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
				<Route
					path="/profile"
					render={() => (
						<Profile
							profilePage={props.state.profilePage}
							dispatch={props.dispatch}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default App
