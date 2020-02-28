import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

function App({ posts, dialogs, messages }) {
	return (
		<Router>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper__content">
					<Switch>
						<Route
							path="/dialogs"
							render={() => <Dialogs dialogs={dialogs} messages={messages} />}
						/>
						<Route path="/profile" render={() => <Profile posts={posts} />} />
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
