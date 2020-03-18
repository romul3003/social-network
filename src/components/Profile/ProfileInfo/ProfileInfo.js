import React, { useState } from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'
import ProfileDataFormReduxForm from './ProfileDataForm/ProfileDataForm'
import ProfileData from './ProfileData/ProfileData'

const ProfileInfo = ({
	profile,
	status,
	updateStatus,
	isOwner,
	savePhoto,
	saveProfile,
}) => {
	const [editMode, setEditMode] = useState(false)

	if (!profile) {
		return <Preloader />
	}

	const inMainPhotoSelected = event => {
		if (event.target.files.length) {
			savePhoto(event.target.files[0])
		}
	}

	const onSubmit = formData => {
		saveProfile(formData).then(() => setEditMode(false))
	}

	return (
		<div>
			<div className={classes.description_block}>
				<div className={classes.photo_wrap}>
					<img
						src={profile.photos.large || userPhoto}
						alt={profile.fullName}
						className={classes.main_photo}
					/>
					{isOwner && <input type="file" onChange={inMainPhotoSelected} />}
				</div>
				<div>
					<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

					{editMode ? (
						<ProfileDataFormReduxForm
							initialValues={profile}
							onSubmit={onSubmit}
							profile={profile}
						/>
					) : (
						<ProfileData
							profile={profile}
							isOwner={isOwner}
							goToEditMode={() => setEditMode(true)}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo
