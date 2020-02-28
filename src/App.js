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
				<Route
					path="/dialogs"
					render={() => <Dialogs state={props.state.dialogPage} />}
				/>
				<Route
					path="/profile"
					render={() => (
						<Profile
							profilePage={props.state.profilePage}
							addPost={props.addPost}
							updateNewPostText={props.updateNewPostText}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default App
