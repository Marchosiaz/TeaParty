import { getMyProfileInHeader } from './authReducer';
import { InitialStateType } from './types/AppTypes'
import { setInitialized } from './ActionCreators/AppActionCreators';

export const SET_INITIALIZED = 'SET-INITIALIZED';


let initialState: InitialStateType = {
	initialized: false
};

const AppReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_INITIALIZED:
			return {
				...state,
				initialized: true
			}
		default:
			return state
	}
}

export const initializeApp = () => (dispatch: Function) => {
	let promise = dispatch(getMyProfileInHeader());
	Promise.all([promise]).then(() => {
		dispatch(setInitialized())
	})
}


export default AppReducer;