import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const dialogsData = [
	{ id: 1, name: 'Dimych' },
	{ id: 2, name: 'Andrey' },
	{ id: 3, name: 'Sveta' },
	{ id: 4, name: 'Sasha' },
	{ id: 5, name: 'Victor' },
	{ id: 6, name: 'Valera' },
]

const messagesData = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How are you?' },
	{ id: 3, message: 'Yo!' },
]

const Dialogs = () => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogItems}>
				{dialogsData.map(user => (
					<DialogItem id={user.id} name={user.name} key={user.id} />
				))}
			</div>
			<div className={classes.messages}>
				{messagesData.map(message => (
					<Message name={message.message} key={message.id} />
				))}
			</div>
		</div>
	)
}

export default Dialogs
