import React from 'react'
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => (
	<div className={classes.content}>
		<div>
			<img
				src="https://external-preview.redd.it/RaWcOb8MVDA3tze0evAogMHG8rSpDkrqISpgBW9Tn-g.jpg?auto=webp&s=3513b1d3115109b102214d165ad78cb39605ef13"
				alt=""
			/>
		</div>
		<div>ava + description</div>
		<MyPosts />
	</div>
)

export default Profile
