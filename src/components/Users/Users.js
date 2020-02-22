import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
	
	return (
		<div className={s.wrapper}>
		<div className={s.users}><h1>Users</h1></div>
			{props.users.map(u => <div key={u.id}>
				<div className={s.user}>
					<div><img className={s.ava} src={u.ava}/></div>
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
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</div>
					<div>
						<div>{u.location.city}</div>
						<div>{u.location.country}</div>
					</div>
				</div>
			</div>)}
		</div>
	)
};


export default Users;