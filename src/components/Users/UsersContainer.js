import React from 'react';
import {connect} from 'react-redux';
import {toggleFollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC} from './../../redux/Reducers/UsersReducer.js';
import * as axios from 'axios';
import Users from './Users.js'

class UsersContainer extends React.Component {

	componentDidMount() {

		if (this.props.users.length === 0) {
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalCount(response.data.totalCount)
			})
		};
	};

	changeCurrentPage = (p) => {
		this.props.setCurrentPage(p);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)})
	};

	render() {

		return <Users 
		totalCount={this.props.totalCount} 
		pageSize={this.props.pageSize} 
		currentPage={this.props.currentPage} 
		changeCurrentPage={this.changeCurrentPage}
		users={this.props.users}
		toggleFollow={this.props.toggleFollow}/>
	}
};


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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);