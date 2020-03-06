import React, { Fragment } from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {
	return (
		<Fragment>
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</Fragment>
	)
}

export default Profile
