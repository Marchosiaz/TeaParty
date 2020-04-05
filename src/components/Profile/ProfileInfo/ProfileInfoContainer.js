import React from 'react';
import { addPost } from './../../../redux/Reducers/ActionCreators/ProfileActionCreators';
import { savePhoto, updateStatus } from '../../../redux/Reducers/profileReducer';
import ProfileInfo from './ProfileInfo.js';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
		profile: state.profilePage.profile,
		status: state.profilePage.status,
	}
};

let mapDispatchToProps = {
	addPost,
	updateStatus,
	savePhoto
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
