import React from 'react';
import {connect} from 'react-redux';
import Users from './Users.js';
import {toggleFollowAC, setUsersAC} from './../../redux/Reducers/UsersReducer.js'


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		toggleFollow: (userID) => {
			dispatch(toggleFollowAC(userID))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);