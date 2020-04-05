import { profileAPI } from '../../api/api.js';
import { AnyAction } from 'redux';
import { InitialStateType } from './types/Profiletypes';
import { setUserProfile, changeProfileStatus, savePhotoSuccess } from './ActionCreators/ProfileActionCreators';

export const ADD_POST = 'profilePage/ADD-POST';
export const SET_USER_PROFILE = 'profilePage/SET-USER-PROFILE';
export const CHANGE_PROFILE_STATUS = 'profilePage/CHANGE-PROFILE-STATUS';
export const DELETE_POST = 'profilePage/DELETE-POST';
export const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE-PHOTO-SUCCESS';

let initialState: InitialStateType = {
	profile: null,
	status: 'I have no status',
	posts: [
		{ id: 1, message: 'Hello', countLike: '12' },
		{ id: 2, message: 'Hex', countLike: '97' },],

};


const profileReducer = (state = initialState, action: AnyAction) => {

	switch (action.type) {
		case ADD_POST:
			let newpost = { id: 32, message: action.postMessage, countLike: 0 }
			return {
				...state,
				posts: [...state.posts, newpost],
			};
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };

		case CHANGE_PROFILE_STATUS:
			return { ...state, status: action.status }

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.id)
			};

		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos }
			}

		default:
			return state;
	};
};

export const setUserInProfilePage = (id: null | number) => {
	return async (dispatch: Function) => {
		let data = await profileAPI.setUserInProfilePage(id)
		dispatch(setUserProfile(data))
	}
}

export const getStatus = (id: null | number) => {
	return async (dispatch: Function) => {
		let response = await profileAPI.getStatus(id);
		dispatch(changeProfileStatus(response.data))
	}
}

export const updateStatus = (status: null | string) => {
	return async (dispatch: Function) => {
		let response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) {
			dispatch(changeProfileStatus(status))
		}
	}
}

export const savePhoto = (file: null | string) => {
	return async (dispatch: Function) => {
		let response = await profileAPI.savePhoto(file);
		if (response.data.resultCode === 0) {
			dispatch(savePhotoSuccess(response.data.data.photos))
		}
	}
}

export default profileReducer;