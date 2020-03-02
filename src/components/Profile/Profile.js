import React, { Fragment } from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {
	return (
		<Fragment>
			<ProfileInfo />
			<MyPostsContainer />
		</Fragment>
	)
}

export default Profile
