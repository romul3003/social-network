import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ posts }) => {
	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea cols="30" rows="5" />
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>
				{posts.map(post => (
					<Post
						message={post.message}
						likesCount={post.likesCount}
						key={post.id}
					/>
				))}
			</div>
		</div>
	)
}

export default MyPosts
