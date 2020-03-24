import {profileAPI, authAPI} from '../../api/api.js';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA';


let initialState = {
	isFetching: false,
	userId: null,
	email: null,
	login: null,
	isAuth: false,

};


const authReducer = (state = initialState, action) => {

	switch(action.type) {

		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}

		default:
			return state

	};
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getMyProfileInHeader = () => {
	return async (dispatch) => {

		let data = await profileAPI.getMyProfileHeader();

		if (data.resultCode === 0) {
			let {id, email, login} = data.data;
			dispatch(setAuthUserData(id, email, login, true))
		}
	}
}

export const LoginUpdate = (email, password, rememberMe) => {

	return async (dispatch) => {

		let response = await authAPI.login(email, password, rememberMe);

		if (response.data.resultCode === 0) {
			dispatch(getMyProfileInHeader())
		} else {
			let errorMessage = response.data.messages.length > 0 ?  response.data.messages[0] : 'Uhm...Something is wrong'
			dispatch(stopSubmit('login', {_error: errorMessage}))
		}
	}
}

export const LogOut = () => {

	return async (dispatch) => {

		let response = await authAPI.logout();

		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	}
}



export default authReducer;