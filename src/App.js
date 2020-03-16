import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import LoginPage from './components/Login/Login'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/appRecucer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/store'

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper__content">
					<Route path="/dialogs" render={() => <DialogsContainer />} />
					<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/login" render={() => <LoginPage />} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	initialized: state.app.initialized,
})

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp })
)(App)

const MainApp = props => {
	return (
		<Router>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</Router>
	)
}

export default MainApp
