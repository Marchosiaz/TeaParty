import React from 'react'
import s from './NavFriend.module.css'

const NavFriend = (props) => {
	return (
		<div className={s.NavFriend}>
			<img className={s.first} src={props.ava}/>
			<div className={s.name}>{props.name}</div>
		</div>
	)
}

export default NavFriend;