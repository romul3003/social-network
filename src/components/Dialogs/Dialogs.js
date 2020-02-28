import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = ({ dialogs, messages }) => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>
				{dialogs.map(user => (
					<DialogItem id={user.id} name={user.name} key={user.id} />
				))}
			</div>
			<div className={classes.messages}>
				{messages.map(message => (
					<Message name={message.message} key={message.id} />
				))}
			</div>
		</div>
	)
}

export default Dialogs
