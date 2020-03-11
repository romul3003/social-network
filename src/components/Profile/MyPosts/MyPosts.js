import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddNewPostForm from './AddNewPostForm/AddNewPostForm'

const MyPosts = props => {
	const postElements = props.posts.map(post => (
		<Post message={post.message} likesCount={post.likesCount} key={post.id} />
	))

	const onAddPost = values => {
		props.addPost(values.newPostText)
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<AddNewPostForm onSubmit={onAddPost} />
			</div>
			<div className={classes.posts}>{postElements}</div>
		</div>
	)
}

export default MyPosts
