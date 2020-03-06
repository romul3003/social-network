import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

function App() {
	return (
		<div className="app-wrapper">
			<Header />
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
