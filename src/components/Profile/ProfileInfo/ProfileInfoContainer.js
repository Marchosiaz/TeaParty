import React from 'react';
import {addPost, updateStatus, savePhoto} from './../../../redux/Reducers/profileReducer.js';
import ProfileInfo from './ProfileInfo.js';
import {connect} from 'react-redux'

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
