import React from 'react'
import classes from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'

const LoginForm = props => (
	<form onSubmit={props.handleSubmit}>
		<div>
			<Field
				placeholder={'Login'}
				name={'login'}
				component={Input}
				validate={[required]}
			/>
		</div>
		<div>
			<Field
				placeholder={'Password'}
				name={'password'}
				component={Input}
				validate={[required]}
			/>
		</div>
		<div>
			<Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember
			me
		</div>
		<div>
			<button type={'submit'}>Login</button>
		</div>
	</form>
)

const LoginReduxForm = reduxForm({
	form: 'login',
})(LoginForm)

const Login = () => {
	const onSubmit = formData => {
		// eslint-disable-next-line no-console
		console.log(formData)
	}

	return (
		<div className={classes.wrap}>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

export default Login
