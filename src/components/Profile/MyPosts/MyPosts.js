import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'

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
				<AddNewPostReduxForm onSubmit={onAddPost} />
			</div>
			<div className={classes.posts}>{postElements}</div>
		</div>
	)
}

const AddNewPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component="textarea"
				name="newPostText"
				placeholder="Enter your post"
			/>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddNewPostReduxForm = reduxForm({
	form: 'ProfileAddNewPostForm',
})(AddNewPostForm)

export default MyPosts
