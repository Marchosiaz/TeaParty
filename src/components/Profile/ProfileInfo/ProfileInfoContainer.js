import React from 'react';
import {addPost, updateNewPostText} from './../../../redux/Reducers/profileReducer.js';
import ProfileInfo from './ProfileInfo.js';
import {connect} from 'react-redux'
import {updateStatus} from '../../../redux/Reducers/profileReducer.js'

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
		profile: state.profilePage.profile,
		status: state.profilePage.status, 
	}
};

let mapDispatchToProps = {
	addPost,
	updateStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
