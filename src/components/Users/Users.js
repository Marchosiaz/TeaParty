import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/anonym.png';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {

	let pagesCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {pages.push(i)};
	let page = pages.map(p => 
		<a className={props.currentPage === p && s.selectedPage} onClick={() => {props.changeCurrentPage(p)}}>{p}</a>);

	return <div>
			<div>Users</div>
			{page}
			{
				props.users.map(u => 
					<div key={u.id}>
						<div>
							<div>
								<NavLink to={`/profile/${u.id}`}>
								<img src={(u.photos.small != null) ? u.photos.small : userPhoto}/>
								</NavLink>
							</div>
								<div>
									{
										(u.followed) ? 
										<button onClick={() => 

											axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,  
											{
												withCredentials: true,
												headers: {
													"API-KEY": 'bb7a7dd0-c86a-4a65-8927-b2549d603e92'
												}
											}).then(response => {
												if (response.data.resultCode === 0) {
													props.toggleFollow(u.id)
												}
											})}

											className={s.button}>Unfollow</button> : 
										<button onClick={() => 

											axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
											{withCredentials: true, headers: {"API-KEY": 'bb7a7dd0-c86a-4a65-8927-b2549d603e92'}}
											).then(response => {
												if (response.data.resultCode === 0) {
													props.toggleFollow(u.id)
												}
											})} className={s.button}>Follow</button>
									}
								</div>
							</div>
							<div>
								<div>
									<div>{u.name}</div>
									<div>{u.status}</div>
								</div>
								<div>
									<div>city</div>
									<div>country</div>
								</div>
							</div>
					</div>)
				}</div>
}

export default Users;