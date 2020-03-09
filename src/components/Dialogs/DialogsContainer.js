import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

export default compose(
	connect(mapStateToProps, {
		sendMessage,
		updateNewMessageBody,
	}),
	withAuthRedirect
)(Dialogs)
