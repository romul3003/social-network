import React, { Fragment } from 'react'
// import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ posts }) => (
	<Fragment>
		<ProfileInfo />
		<MyPosts posts={posts} />
	</Fragment>
)

export default Profile
