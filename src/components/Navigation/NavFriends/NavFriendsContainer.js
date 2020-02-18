import React from 'react';
import NavFriends from './NavFriends.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		navFriends: state.navPage.NavFriends
	}
};

let mapDispatchToProps = (dispatch) => {
	return {

	}
};

const navFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(NavFriends);

export default navFriendsContainer;