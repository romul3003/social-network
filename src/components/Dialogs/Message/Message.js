import React from 'react'
import classes from '../Dialogs.module.css'

const Message = ({ message }) => (
	<div className={classes.message}>{message}</div>
)

export default Message
