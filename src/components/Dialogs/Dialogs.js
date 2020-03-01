import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = props => {
	const state = props.dialogsPage

	const dialogsElements = state.dialogs.map(user => (
		<DialogItem id={user.id} name={user.name} key={user.id} />
	))

	const messagesElements = state.messages.map(message => (
		<Message name={message.message} key={message.id} />
	))

	const newMessageBody = state.newMessageBody

	const onNewMessageChange = event => {
		const body = event.target.value
		props.updateNewMessageBody(body)
	}

	const onSendMessageClick = () => {
		props.sendMessage()
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>{dialogsElements}</div>
			<div className={classes.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							value={newMessageBody}
							onChange={onNewMessageChange}
							placeholder="Enter your message"
						/>
					</div>
					<div>
						<button onClick={onSendMessageClick}>Send</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs
