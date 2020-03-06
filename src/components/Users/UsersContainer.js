import React from 'react';
import {connect} from 'react-redux';
import {toggleFollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingInProgress} from './../../redux/Reducers/UsersReducer.js';
import Users from './Users.js';
import PreLoader from './Preloader/Preloader.js';
import usersAPI from '../../api/api.js';

class UsersContainer extends React.Component {

	componentDidMount() {

		if (this.props.users.length === 0) {
			this.props.toggleIsFetching(true)
			usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalCount(data.totalCount)
			})
		};
	};

	changeCurrentPage = (p) => {
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(p);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)})
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
			toggleFollow={this.props.toggleFollow}
			toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
	toggleFollow,
	setUsers,
	setCurrentPage,
	setTotalCount,
	toggleIsFetching,
	toggleFollowingInProgress
};




export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);