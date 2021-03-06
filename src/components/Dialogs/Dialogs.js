import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom'
import AddMessageForm from './AddMessageForm/AddMessageForm'

const Dialogs = props => {
	const state = props.dialogsPage

	const dialogsElements = state.dialogs.map(user => (
		<DialogItem id={user.id} name={user.name} key={user.id} />
	))

	const messagesElements = state.messages.map(message => (
		<Message message={message.message} key={message.id} />
	))

	const addNewMessage = values => {
		props.sendMessage(values.newMessageBody)
	}

	if (!props.isAuth) return <Redirect to="/login" />

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>{dialogsElements}</div>
			<div className={classes.messages}>
				<div>{messagesElements}</div>
				<AddMessageForm onSubmit={addNewMessage} />
			</div>
		</div>
	)
}

export default Dialogs
