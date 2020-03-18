import React, { Fragment } from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({ isOwner, profile, status, updateStatus, savePhoto }) => {
	return (
		<Fragment>
			<ProfileInfo
				profile={profile}
				status={status}
				updateStatus={updateStatus}
				isOwner={isOwner}
				savePhoto={savePhoto}
			/>
			<MyPostsContainer />
		</Fragment>
	)
}

export default Profile
