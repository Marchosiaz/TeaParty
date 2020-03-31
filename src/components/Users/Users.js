import React from 'react';
import s from './Users.module.css';
import usersAPI from '../../api/api.js';
import {Paginator} from '../Common/Paginator/Paginator.js';
import {User} from './User/User.js';

const Users = (props) => {

	return <div>
			<div className={s.title}>Users</div>
			<Paginator 
				totalCount={props.totalCount} 
				pageSize={props.pageSize} 
				currentPage={props.currentPage} 
				changeCurrentPage={props.changeCurrentPage}/>
			{
			props.users.map(u => 
				<User user={u} key={u.id} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow}/>)
			}
			<Paginator 
				totalCount={props.totalCount} 
				pageSize={props.pageSize} 
				currentPage={props.currentPage} 
				changeCurrentPage={props.changeCurrentPage}/>
	</div>
}

export default Users;