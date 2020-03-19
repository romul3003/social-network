import React from 'react'
import './App.css'
import {
	HashRouter as Router,
	Redirect,
	Route,
	Switch,
	withRouter,
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HeaderContainer from './components/Header/HeaderContainer'
import UsersContainer from './components/Users/UsersContainer'
import LoginPage from './components/Login/Login'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import { initializeApp } from './redux/appRecucer'
import Preloader from './components/common/Preloader/Preloader'
import store from './redux/store'
import { withSuspense } from './hoc/withSuspense'
import NotFound from './components/NotFound/NotFound'

const DialogsContainer = React.lazy(() =>
	import('./components/Dialogs/DialogsContainer')
)
const ProfileContainer = React.lazy(() =>
	import('./components/Profile/ProfileContainer')
)

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
					<Switch>
						<Redirect exact from="/" to="/profile" />
						<Route path="/dialogs" render={withSuspense(DialogsContainer)} />
						<Route
							path="/profile/:userId?"
							render={withSuspense(ProfileContainer)}
						/>
						<Route path="/users" render={() => <UsersContainer />} />
						<Route path="/login" render={() => <LoginPage />} />
						<Route component={NotFound} />
					</Switch>
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
