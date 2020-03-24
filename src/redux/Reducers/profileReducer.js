import {profileAPI} from '../../api/api.js';

const ADD_POST = 'profilePage/ADD-POST';
const SET_USER_PROFILE = 'profilePage/SET-USER-PROFILE';
const CHANGE_PROFILE_STATUS = 'profilePage/CHANGE-PROFILE-STATUS';
const DELETE_POST = 'profilePage/DELETE-POST'

let initialState = {
	profile: null,
	status: 'I have no status',
	posts: [
		{id: 1, message: 'Hello', countLike:'12'},
		{id: 2, message: 'Hex', countLike:'97'},],

};


const profileReducer = (state = initialState, action) => {

	switch(action.type) {
		case ADD_POST:
			let newpost = {id: 32,message: action.postMessage,countLike: 0}
			return {
				...state,
				posts: [...state.posts, newpost],
			};
		case SET_USER_PROFILE:
			return {...state, profile: action.profile};

		case CHANGE_PROFILE_STATUS:
			return {...state, status: action.status}

		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(p => p.id != action.id)
			}

		default: 
			return state;
	};
};

export const addPost = (postMessage) => ({type: ADD_POST, postMessage});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const changeProfileStatus = (status) => ({type: CHANGE_PROFILE_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id})

export const setUserInProfilePage = (id) => {
	return async (dispatch) => {
		let data = await profileAPI.setUserInProfilePage(id)
		dispatch(setUserProfile(data))
	}
}

export const getStatus = (id) => {
	return async (dispatch) => {
		let response = await profileAPI.getStatus(id);
		dispatch(changeProfileStatus(response.data))
	}
}

export const updateStatus = (status) => {
	return async (dispatch) => {
		let response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) {
			dispatch(changeProfileStatus(status))
		}	
	}
}

export default profileReducer;