import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { maxLength, required } from '../../../utils/validators/validators'

const maxLength10 = maxLength(10)

let AddMessageForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Textarea}
					name="newMessageBody"
					placeholder="Enter your message"
					validate={[required, maxLength10]}
				/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	)
}

AddMessageForm = reduxForm({
	form: 'dialogAddMessageForm',
})(AddMessageForm)

export default AddMessageForm
