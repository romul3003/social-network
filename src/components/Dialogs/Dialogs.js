import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = props => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>
				{props.state.dialogs.map(user => (
					<DialogItem id={user.id} name={user.name} key={user.id} />
				))}
			</div>
			<div className={classes.messages}>
				{props.state.messages.map(message => (
					<Message name={message.message} key={message.id} />
				))}
			</div>
		</div>
	)
}

export default Dialogs
