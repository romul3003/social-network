import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = props => (
	<header className={classes.header}>
		<img
			src="https://cdn3.f-cdn.com//files/download/70016655/Logo%202.png"
			alt=""
		/>

		<div className={classes.login_block}>
			{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
		</div>
	</header>
)

export default Header
