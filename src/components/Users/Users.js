import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/anonym.png';

class Users extends React.Component {

	componentDidMount() {

		if (this.props.users.length === 0) {
			axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
				this.props.setUsers(response.data.items)
			})
		};
	};

	render() {
			return <div className={s.wrapper}>
			<div className={s.users}>Users</div>
				{
					this.props.users.map(u => <div className={s.content} key={u.id}>
					<div className={s.user}>
						<div><img className={s.ava} src={(u.photos.small != null) ? u.photos.small : userPhoto}/></div>
						<div>
							{
								(u.followed) ? 
								<button onClick={() => this.props.toggleFollow(u.id)} className={s.button}>Unfollow</button> : 
								<button onClick={() => this.props.toggleFollow(u.id)} className={s.button}>Follow</button>
							}
						</div>
					</div>
					<div className={s.info}>
						<div>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</div>
						<div>
							<div>"u.location.city</div>
							<div>"u.location.country"</div>
						</div>
					</div>
				</div>)
			}
			</div>
	}
};


export default Users;