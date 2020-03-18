import React from 'react'
import classes from './FormsControls.module.css'
import { Field } from 'redux-form'

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
	const { input, meta, ...restProps } = props
	return (
		<FormControl {...props}>
			<textarea {...input} {...restProps} />
		</FormControl>
	)
}

export const Input = props => {
	const { input, meta, ...restProps } = props
	return (
		<FormControl meta={meta} {...restProps}>
			<input {...input} {...restProps} />
		</FormControl>
	)
}

export const createField = (
	placeholder,
	name,
	validators,
	component,
	props = {},
	text = ''
) => (
	<div>
		<Field
			placeholder={placeholder}
			name={name}
			validate={validators}
			component={component}
			{...props}
		/>
		{text}
	</div>
)
