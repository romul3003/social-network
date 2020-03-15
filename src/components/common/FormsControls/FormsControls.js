import React from 'react'
import classes from './FormsControls.module.css'

export const FormControl = ({
	input,
	meta: { touched, error, warning },
	...restProps
}) => {
	const hasError = touched && error
	return (
		<div
			className={`${classes.form_control} ${
				hasError ? classes.error : ''
			}`.trim()}
		>
			<div>{restProps.children}</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}

export const Textarea = props => {
	const { input, ...restProps } = props
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} />
		</FormControl>
	)
}

export const Input = props => {
	const { input, ...restProps } = props
	return (
		<FormControl {...props}>
			<input {...input} {...restProps} />
		</FormControl>
	)
}
