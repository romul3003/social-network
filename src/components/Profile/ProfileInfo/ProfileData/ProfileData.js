import classes from '../ProfileInfo.module.css'
import React from 'react'

const ProfileData = ({ profile, isOwner, goToEditMode }) => (
	<>
		{isOwner && (
			<div>
				<button onClick={goToEditMode}>Edit</button>
			</div>
		)}
		<div>
			<b>Full name:</b> {profile.fullName}
		</div>
		<div>
			<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
		</div>
		<div>
			<b>My professional skills:</b> {profile.lookingForAJobDescription}
		</div>
		<div>
			<b>About me:</b> {profile.aboutMe}
		</div>
		<div>
			<b>Contacts:</b>{' '}
			<ul className={classes.contacts}>
				{Object.keys(profile.contacts).map(key => (
					<Contact
						key={key}
						contactTitle={key}
						contactValue={profile.contacts[key]}
					/>
				))}
			</ul>
		</div>
	</>
)

const Contact = ({ contactTitle, contactValue }) => (
	<li>
		<b>{contactTitle}</b>: {contactValue}
	</li>
)

export default ProfileData
