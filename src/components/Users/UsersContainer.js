import React from 'react';
import {connect} from 'react-redux';
import {toggleFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching} from './../../redux/Reducers/UsersReducer.js';
import * as axios from 'axios';
import Users from './Users.js';
import PreLoader from './Preloader/Preloader.js';

class UsersContainer extends React.Component {

	componentDidMount() {

		if (this.props.users.length === 0) {
			this.props.toggleIsFetching(true)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalCount(response.data.totalCount)
			})
		};
	};

	changeCurrentPage = (p) => {
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(p);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(response.data.items)})
	};

	render() {

		return <>
		{this.props.isFetching ? <PreLoader /> : 
		<Users 
			totalCount={this.props.totalCount} 
			pageSize={this.props.pageSize} 
			currentPage={this.props.currentPage} 
			changeCurrentPage={this.changeCurrentPage}
			users={this.props.users}
			toggleFollow={this.props.toggleFollow}/>}
		</>
	}
};


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		currentPage: state.usersPage.currentPage,
		pageSize: state.usersPage.pageSize,
		totalCount: state.usersPage.totalCount,
		isFetching: state.usersPage.isFetching,
	}
};

let mapDispatchToProps = {
	toggleFollow,
	setUsers,
	setCurrentPage,
	setTotalCount,
	toggleIsFetching
};




export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);