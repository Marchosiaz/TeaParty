import React from 'react';
import MyPosts from './MyPosts.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {

	}
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;