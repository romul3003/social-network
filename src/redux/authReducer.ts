import { authAPI, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS'

type InitialStateType = {
	userId: number| null,
	email: string | null,
	login: string | null,
	isAuth:  boolean,
	isFetching: boolean,
	captchaUtl: string | null,
}

const initialState: InitialStateType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false,
	captchaUtl: null, // if null, then captcha is not required
}

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}

		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload,
			}

		default:
			return state
	}
}


// action creators
type setAuthUserDataActionPayloadType = {
	userId: number | null,
	email: string | null,
	login: string | null,
	isAuth: boolean,
}

type setAuthUserDataType = {
	type: typeof SET_USER_DATA,
	payload: setAuthUserDataActionPayloadType,
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
})

type GetCaptchaUrlSuccessActionType = {
	type: typeof GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl },
})

// thunk creators
export const getAuthUserData = () => async (dispatch: any) => {
	const data = await authAPI.me()
	if (data.resultCode === 0) {
		const { id, email, login } = data.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}

export const login = (
	email: string,
	password: string,
	rememberMe: boolean,
	captcha: string
) => async (dispatch: any) => {
	const data = await authAPI.login(email, password, rememberMe, captcha)
	if (data.resultCode === 0) {
		// success, get auth data
		dispatch(getAuthUserData())
	} else {
		if (data.resultCode === 10) {
			dispatch(getCaptchaUrl())
		}
		const message = data.messages.length > 0 ? data.messages[0] : 'Some error'
		dispatch(stopSubmit('login', { _error: message }))
	}
}

export const getCaptchaUrl = () => async (dispatch: any) => {
	const data = await securityAPI.getCaptchaUrl()
	const { url: captchaUrl } = data
	dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => (dispatch: any) => {
	authAPI.logout().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}

export default authReducer
