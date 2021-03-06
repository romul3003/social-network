import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => (
	<nav className={classes.nav}>
		<div className={classes.item}>
			<NavLink
				to="/profile"
				className={classes.item_link}
				activeClassName={classes.activeLink}
			>
				Profile
			</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink
				to="/dialogs"
				className={classes.item_link}
				activeClassName={classes.activeLink}
			>
				Messages
			</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink
				to="/users"
				className={classes.item_link}
				activeClassName={classes.activeLink}
			>
				Users
			</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink
				to="/news"
				className={classes.item_link}
				activeClassName={classes.activeLink}
			>
				News
			</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink
				to="/music"
				className={classes.item_link}
				activeClassName={classes.activeLink}
			>
				Music
			</NavLink>
		</div>
		<div className={classes.item}>
			<NavLink
				to="/settings"
				className={classes.item_link}
				activeClassName={classes.activeLink}
			>
				Settings
			</NavLink>
		</div>
	</nav>
)

export default Navbar
