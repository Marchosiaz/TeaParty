import { profileAPI, authAPI, securityAPI } from '../../api/api.js';
import { stopSubmit } from 'redux-form';
import { setAuthUserData, setCaptchaURL } from './ActionCreators/AuthActionCreators';
import { initialStatetype } from './types/AuthTypes';

export const SET_USER_DATA = 'auth/SET-USER-DATA';
export const SET_CAPTCHA_URL = 'auth/SET-CAPTCHA-URL';

let initialState: initialStatetype = {
	isFetching: false,
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaURL: null

};


const authReducer = (state: initialStatetype = initialState, action: any) => {

	switch (action.type) {

		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}

		case SET_CAPTCHA_URL:
			return {
				...state,
				captchaURL: action.captchaURL
			}

		default:
			return state

	};
};


export const getMyProfileInHeader = () => {
	return async (dispatch: Function) => {

		let data = await profileAPI.getMyProfileHeader();

		if (data.resultCode === 0) {
			let { id, email, login } = data.data;
			dispatch(setAuthUserData(id, email, login, true))
		}
	}
}

export const LoginUpdate = (email: string, password: any, rememberMe: boolean, captcha: boolean) => {

	return async (dispatch: Function) => {

		let response = await authAPI.login(email, password, rememberMe, captcha);

		if (response.data.resultCode === 0) {
			dispatch(getMyProfileInHeader())
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptcha())
			}
			let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Uhm...Something is wrong'
			dispatch(stopSubmit('login', { _error: errorMessage }))
		}
	}
}

export const LogOut = () => {

	return async (dispatch: Function) => {

		let response = await authAPI.logout();

		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	}
}

export const getCaptcha = () => {

	return async (dispatch: Function) => {

		let response = await securityAPI.getCaptchaURL();
		dispatch(setCaptchaURL(response.data.url))

	}
}


export default authReducer;