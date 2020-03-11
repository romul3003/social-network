import React from 'react'
import { maxLength, required } from '../../../../utils/validators/validators'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../common/FormsControls/FormsControls'

const maxLength10 = maxLength(10)

let AddNewPostForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={Textarea}
				name="newPostText"
				placeholder="Enter your post"
				validate={[required, maxLength10]}
			/>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

AddNewPostForm = reduxForm({
	form: 'ProfileAddNewPostForm',
})(AddNewPostForm)

export default AddNewPostForm
