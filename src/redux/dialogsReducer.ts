const SEND_MESSAGE = 'social-network/dialogs/SEND_MESSAGE'

type DialogType = {
	id: number,
	name: string,
}
type MessageType = {
	id: number,
	message: string,
}


const initialState = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Victor' },
		{ id: 6, name: 'Valera' },
	] as Array<DialogType>,
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How are you?' },
		{ id: 3, message: 'Yo!' },
	] as Array<MessageType>,
}

type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SEND_MESSAGE: {
			const body = action.newMessageBody
			return {
				...state,
				messages: [...state.messages, { id: 6, message: body }],
			}
		}
		default:
			return state
	}
}

type SendMessageType = {
	type: typeof SEND_MESSAGE,
	newMessageBody: string
}

export const sendMessage = (newMessageBody: string ): SendMessageType => ({
	type: SEND_MESSAGE,
	newMessageBody,
})

export default dialogsReducer
