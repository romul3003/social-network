import React from 'react'
import classes from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'

const LoginForm = ({ handleSubmit, error }) => (
	<form onSubmit={handleSubmit}>
		<div>
			<Field
				placeholder={'Email'}
				name={'email'}
				component={Input}
				validate={[required]}
			/>
		</div>
		<div>
			<Field
				placeholder={'Password'}
				name={'password'}
				type={'password'}
				component={Input}
				validate={[required]}
			/>
		</div>
		<div>
			<Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember
			me
		</div>
		{error && <div className={classes.form_summary_error}>{error}</div>}
		<div>
			<button type={'submit'}>Login</button>
		</div>
	</form>
)

const LoginReduxForm = reduxForm({
	form: 'login',
})(LoginForm)

const Login = props => {
	const onSubmit = formData => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}

	return (
		<div className={classes.wrap}>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
	}
}

export default connect(mapStateToProps, { login, logout })(Login)
