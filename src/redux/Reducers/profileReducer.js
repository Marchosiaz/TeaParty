import {profileAPI} from '../../api/api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const CHANGE_PROFILE_STATUS = 'CHANGE-PROFILE-STATUS';

let initialState = {
	profile: null,
	status: 'I have no status',
	posts: [
		{id: 1, message: 'Hello', countLike:'12'},
		{id: 2, message: 'Hex', countLike:'97'},],

		newPostText: '',
};


const profileReducer = (state = initialState, action) => {

	switch(action.type) {
		case ADD_POST:
			let newpost = {id: 32,message: state.newPostText,countLike: 0}
			return {
				...state,
				posts: [...state.posts, newpost],
				newPostText: '',
			};
		case UPDATE_NEW_POST_TEXT:
			return {...state, newPostText: action.text};

		case SET_USER_PROFILE:
			return {...state, profile: action.profile};

		case CHANGE_PROFILE_STATUS:
			return {...state, status: action.status}
		default: 
			return state;
	};
};

export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const changeProfileStatus = (status) => ({type: CHANGE_PROFILE_STATUS, status})

export const setUserInProfilePage = (id) => {
	return (dispatch) => {
		profileAPI.setUserInProfilePage(id).then(data => {
			dispatch(setUserProfile(data))
		})
	}
}

export const getStatus = (id) => {
	return (dispatch) => {
		profileAPI.getStatus(id).then(response => {
			dispatch(changeProfileStatus(response.data))
		})
	}
}

export const updateStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(changeProfileStatus(status))
			}
		})
	}
}

export default profileReducer;