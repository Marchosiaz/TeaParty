import React from 'react';
import {connect} from 'react-redux';
import Users from './Users.js';
import {toggleFollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC} from './../../redux/Reducers/UsersReducer.js';


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		currentPage: state.usersPage.currentPage,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		toggleFollow: (userID) => {
			dispatch(toggleFollowAC(userID))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalCount: (totalCount) => {
			dispatch(setTotalCountAC(totalCount))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);