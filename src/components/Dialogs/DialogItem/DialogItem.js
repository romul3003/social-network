import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Dialogs.module.css'

const DialogItem = ({ name, id }) => {
	const path = `/dialogs/${id}`

	return (
		<div className={classes.dialog}>
			<NavLink
				to={path}
				className={classes.link}
				activeClassName={classes.active}
			>
				{name}
			</NavLink>
		</div>
	)
}

export default DialogItem
