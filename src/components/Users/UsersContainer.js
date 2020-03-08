import React from 'react';
import {connect} from 'react-redux';
import {setCurrentPage, getUsers, unfollow, follow} from '../../redux/Reducers/UsersReducer.js';
import Users from './Users.js';
import PreLoader from './Preloader/Preloader.js';
import usersAPI from '../../api/api.js';

class UsersContainer extends React.Component {

	componentDidMount() {

		this.props.getUsers(this.props.currentPage, this.props.pageSize)

	};

	changeCurrentPage = (p) => {
		//this.props.toggleIsFetching(true)
		//this.props.setCurrentPage(p);
		//usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			//this.props.toggleIsFetching(false)
			//this.props.setUsers(data.items)})

		this.props.getUsers(p, this.props.pageSize)
	};

	render() {

		return <>
		{this.props.isFetching ? <PreLoader /> : 
		<Users 
			totalCount={this.props.totalCount}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
			pageSize={this.props.pageSize} 
			currentPage={this.props.currentPage} 
			changeCurrentPage={this.changeCurrentPage}
			users={this.props.users}
			followingInProgress={this.props.followingInProgress}/>}
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
		followingInProgress: state.usersPage.followingInProgress
	}
};

let mapDispatchToProps = {
	setCurrentPage,
	getUsers,
	unfollow,
	follow
};




export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);