import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = props => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}

	const onStatusChange = event => {
		setStatus(event.currentTarget.value)
	}

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	return (
		<div>
			{!editMode && (
				<div>
					<span onDoubleClick={activateEditMode}>
						<strong>Status:</strong> {props.status || '-----'}
					</span>
				</div>
			)}

			{editMode && (
				<div>
					<input
						autoFocus={true}
						value={status}
						onChange={onStatusChange}
						onBlur={deactivateEditMode}
					/>
				</div>
			)}
		</div>
	)
}

export default ProfileStatusWithHooks
