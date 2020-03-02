import React from 'react';
import {addPost, updateNewPostText} from './../../../redux/Reducers/profileReducer.js';
import ProfileInfo from './ProfileInfo.js';
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
};

let mapDispatchToProps = {
	addPost,
	updateNewPostText,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
