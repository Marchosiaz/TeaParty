import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profileReducer.js';
import ProfileInfo from './ProfileInfo.js';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {dispatch(addPostActionCreator())},
		updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))}
	}
};

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;