import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

function App() {
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Navbar />
			<div className="app-wrapper__content">
				<Route path="/dialogs" render={() => <DialogsContainer />} />
				<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
				<Route path="/users" render={() => <UsersContainer />} />
			</div>
		</div>
	)
}

export default App
