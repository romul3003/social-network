import React from 'react'
import './Post.module.css'
import classes from './Post.module.css'

const Post = () => {
	return (
		<div className={classes.item}>
			<img
				src="https://s3.amazonaws.com/liberty-uploads/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
				alt=""
			/>
			Post 1
			<div>
				<span>like</span>
			</div>
		</div>
	)
}

export default Post
