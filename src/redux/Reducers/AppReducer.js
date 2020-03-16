import {getMyProfileInHeader} from './authReducer.js';

const SET_INITIALIZED = 'SET-INITIALIZED';


let initialState = {
	initialized: false
};

const AppReducer = (state=initialState, action) => {
	switch(action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true
			}
		default:
			return state
	}
}

export const setInitialized = () => ({type: SET_INITIALIZED});

export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getMyProfileInHeader());
	Promise.all([promise]).then(() => {
		dispatch(setInitialized())
	})
}


export default AppReducer;