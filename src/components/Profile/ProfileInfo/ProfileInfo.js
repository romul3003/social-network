import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />
	}

	const inMainPhotoSelected = event => {
		if (event.target.files.length) {
			savePhoto(event.target.files[0])
		}
	}

	return (
		<div>
			<div className={classes.descriptionBlock}>
				<img
					src={profile.photos.large || userPhoto}
					alt={profile.fullName}
					className={classes.mainPhoto}
				/>
				{isOwner && <input type="file" onChange={inMainPhotoSelected} />}
				<div>
					<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
					<strong>About me:</strong> {profile.aboutMe}
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo
