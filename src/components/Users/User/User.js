import React from 'react';
import userPhoto from '../../../assets/images/anonym.png';
import s from './User.module.css';
import {NavLink} from 'react-router-dom';


export const User = ({user, followingInProgress, unfollow, follow, ...props}) => {
	
	return	<div className={s.user}>
				<div>
					<NavLink to={`/profile/${user.id}`}>
					<img src={(user.photos.small != null) ? user.photos.small : userPhoto}/>
					</NavLink>
				</div>
					<div>
						{
							(user.followed) ? 
							<button disabled={props.followingInProgress} onClick={() => props.unfollow(user.id)}

								className={s.button}>Unfollow</button> : 
							<button disabled={props.followingInProgress} onClick={() => props.follow(user.id)} 

								className={s.button}>Follow</button>
						}
					</div>
				<div>
					<div>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</div>
					<div>
						<div>city</div>
						<div>country</div>
					</div>
				</div>
		</div>
}