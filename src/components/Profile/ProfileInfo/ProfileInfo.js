import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../Preloader/Preloader'

const ProfileInfo = props => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img
					src="https://external-preview.redd.it/RaWcOb8MVDA3tze0evAogMHG8rSpDkrqISpgBW9Tn-g.jpg?auto=webp&s=3513b1d3115109b102214d165ad78cb39605ef13"
					alt=""
				/>
			</div>
			<div className={classes.descriptionBlock}>
				<img src={props.profile.photos.large} alt={props.profile.fullName} />
				<div>
					<strong>About me:</strong> {props.profile.aboutMe}
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo
