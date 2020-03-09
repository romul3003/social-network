import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, {
	sendMessage,
	updateNewMessageBody,
})(AuthRedirectComponent)

export default DialogsContainer
