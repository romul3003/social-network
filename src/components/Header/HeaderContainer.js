import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { setAuth } from '../../redux/authReducer'

class HeaderContainer extends Component {
	componentDidMount() {
		this.props.setAuth()
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})

export default connect(mapStateToProps, { setAuth })(HeaderContainer)
