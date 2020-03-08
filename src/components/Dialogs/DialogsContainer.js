import { sendMessage, updateNewMessageBody } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth,
	}
}

const DialogsContainer = connect(mapStateToProps, {
	sendMessage,
	updateNewMessageBody,
})(Dialogs)

export default DialogsContainer
