import React from 'react'
import s from './NavFriends.module.css'
import NavFriend from './NavFriend/NavFriend.js'

const NavFriends = (props) => {
	let f = props.navFriends.map(el => <NavFriend ava={el.ava} name={el.name}/>)
	return (
		<div className={s.NavFriends}>
			<div>Friends:</div>
			{f}
		</div>
	)
}

export default NavFriends;