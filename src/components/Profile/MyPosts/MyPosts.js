import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../redux/profileReducer'

const MyPosts = props => {
	const postElements = props.posts.map(post => (
		<Post message={post.message} likesCount={post.likesCount} key={post.id} />
	))

	const newPostElement = React.createRef()

	const addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	const onPostChange = () => {
		const text = newPostElement.current.value
		props.dispatch(updateNewPostTextActionCreator(text))
	}

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						ref={newPostElement}
						value={props.newPostText}
						onChange={onPostChange}
					/>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>{postElements}</div>
		</div>
	)
}

export default MyPosts
