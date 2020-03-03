import React from 'react'
import classes from './users.module.css'

const Users = props => {
	if (!props.users.length) {
		props.setUsers([
			{
				id: 1,
				photoUrl:
					'https://vignette.wikia.nocookie.net/ru.starwars/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20160623105957',
				followed: false,
				fullName: 'Roman',
				status: 'I am a boss',
				location: { city: 'Kyiv', country: 'Ukraine' },
			},
			{
				id: 2,
				photoUrl:
					'https://vignette.wikia.nocookie.net/ru.starwars/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20160623105957',
				followed: true,
				fullName: 'Sasha',
				status: 'I am a boss too',
				location: { city: 'Minsk', country: 'Belarus' },
			},
			{
				id: 3,
				photoUrl:
					'https://vignette.wikia.nocookie.net/ru.starwars/images/5/50/Darth_Maul_profile.png/revision/latest?cb=20160623105957',
				followed: false,
				fullName: 'Andrew',
				status: 'I am a boss too',
				location: { city: 'Riga', country: 'Latvia' },
			},
		])
	}

	return (
		<div>
			{props.users.map(user => (
				<div key={user.id}>
					<span>
						<div>
							<img
								src={user.photoUrl}
								alt={user.fullName}
								className={classes.userPhoto}
							/>
						</div>
						<div>
							{user.followed ? (
								<button onClick={() => props.unfollow(user.id)}>
									Unfollow
								</button>
							) : (
								<button onClick={() => props.follow(user.id)}>Follow</button>
							)}
						</div>
					</span>
					<span>
						<div>{user.fullName}</div>
						<div>{user.status}</div>
					</span>
					<span>
						<div>{user.location.country}</div>
						<div>{user.location.city}</div>
					</span>
				</div>
			))}
		</div>
	)
}

export default Users
