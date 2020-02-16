import React from 'react'
import './Navigation.css'
import {NavLink} from 'react-router-dom'
import NavFriends from './NavFriends/NavFriends.js'

const Navigation = (props) => {
	return (
		<nav className='nav'>
	        <div className='pf'><NavLink to='/profile'>Profile</NavLink></div>
	        <div><NavLink to='/dialogs'>Message</NavLink></div>
	        <div><NavLink to='/news'>News</NavLink></div>
	        <div><NavLink to='/music'>Music</NavLink></div>
	        <div><NavLink to='/settings'>Settings</NavLink></div>
	        <NavFriends navFriends={props.navFriends}/>
      </nav>
	)
}

export default Navigation;