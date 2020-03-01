import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/anonym.png';

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
							<div><img src={(u.photos.small != null) ? u.photos.small : userPhoto}/></div>
								<div>
									{
										(u.followed) ? 
										<button onClick={() => props.toggleFollow(u.id)} className={s.button}>Unfollow</button> : 
										<button onClick={() => props.toggleFollow(u.id)} className={s.button}>Follow</button>
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