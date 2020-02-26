import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = ({ name, id }) => {
	const path = `/dialogs/${id}`

	return (
		<div className={`${classes.dialog} ${classes.active}`}>
			<NavLink to={path}>{name}</NavLink>
		</div>
	)
}

const Message = ({ message }) => (
	<div className={classes.message}>{message}</div>
)

const Dialogs = () => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>
				<DialogItem name="Dimych" id="1" />
				<DialogItem name="Andrey" id="2" />
				<DialogItem name="Sveta" id="3" />
				<DialogItem name="Sasha" id="4" />
				<DialogItem name="Victor" id="5" />
				<DialogItem name="Valera" id="6" />
			</div>
			<div className={classes.messages}>
				<Message message="Hi" />
				<Message message="How are you?" />
				<Message message="Yo!" />
			</div>
		</div>
	)
}

export default Dialogs
