import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/anonym.png';

class Users extends React.Component {

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
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {pages.push(i)};
		let page = pages.map(p => 
			<a className={this.props.currentPage === p && s.selectedPage} onClick={() => {this.changeCurrentPage(p)}}>{p}</a>);

		return <div>
			<div>Users</div>
			{page}
			{
				this.props.users.map(u => 
					<div key={u.id}>
						<div>
							<div><img src={(u.photos.small != null) ? u.photos.small : userPhoto}/></div>
								<div>
									{
										(u.followed) ? 
										<button onClick={() => this.props.toggleFollow(u.id)} className={s.button}>Unfollow</button> : 
										<button onClick={() => this.props.toggleFollow(u.id)} className={s.button}>Follow</button>
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
};


export default Users;