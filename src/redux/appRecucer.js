import { getAuthUserData } from './authReducer'

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED_SUCCESS'

const initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			}
		default:
			return state
	}
}

// action creators
export const initializedSuccess = () => ({
	type: INITIALIZED_SUCCESS,
})

// thunk creators
export const initializeApp = () => dispatch => {
	const promise = dispatch(getAuthUserData())

	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess())
	})
}

export default appReducer
