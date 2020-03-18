import React, { Fragment } from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = ({
	isOwner,
	profile,
	status,
	updateStatus,
	savePhoto,
	saveProfile,
}) => {
	return (
		<Fragment>
			<ProfileInfo
				profile={profile}
				status={status}
				updateStatus={updateStatus}
				isOwner={isOwner}
				savePhoto={savePhoto}
				saveProfile={saveProfile}
			/>
			<MyPostsContainer />
		</Fragment>
	)
}

export default Profile
