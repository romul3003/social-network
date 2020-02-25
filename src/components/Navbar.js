import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => (
	<nav className={classes.nav}>
		{/*eslint-disable*/}
		<div className={classes.item}>
			<a href="">Profile</a>
		</div>
		<div className={classes.item}>
			<a href="">Messages</a>
		</div>
		<div className={classes.item}>
			<a href="">News</a>
		</div>
		<div className={classes.item}>
			<a href="">Music</a>
		</div>
		<div className={classes.item}>
			<a href="">Settings</a>
		</div>
		{/*eslint-enable*/}
	</nav>
)

export default Navbar
