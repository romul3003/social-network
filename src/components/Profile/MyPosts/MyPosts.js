import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import AddNewPostForm from './AddNewPostForm/AddNewPostForm'

class MyPosts extends React.PureComponent {
	// shouldComponentUpdate(nextProps, nextState, nextContext) {
	// 	return nextProps !== this.props || nextState !== this.state
	// }

	render() {
		const postElements = this.props.posts.map(post => (
			<Post message={post.message} likesCount={post.likesCount} key={post.id} />
		))

		const onAddPost = values => {
			this.props.addPost(values.newPostText)
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
}

export default MyPosts
