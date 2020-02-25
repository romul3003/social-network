import React from 'react'
import './Post.module.css'
import classes from './Post.module.css'

const Post = ({ message }) => {
	return (
		<div className={classes.item}>
			<img
				src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
				alt=""
			/>
			{message}
			<div>
				<span>like</span>
			</div>
		</div>
	)
}

export default Post
