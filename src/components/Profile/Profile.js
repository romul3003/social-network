import React, { Fragment } from 'react'
// import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => (
	<Fragment>
		<ProfileInfo />
		<MyPosts />
	</Fragment>
)

export default Profile
