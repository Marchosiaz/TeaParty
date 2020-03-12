import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
	return (
		<header className='header'>
			<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3myZqEt-Uxm4mMDA9jt5VIEDupimZjJLsGI7qox20J-8Q8Ptc'/>
			<div className='currentProfile'>
			{ (props.isAuth === true) ? 
				<div>{props.login} - <button onClick={props.LogOut}>Log Out</button></div> : 
				<NavLink to='/login'>Login</NavLink>
			}
			</div>
		</header>

	)
}

export default Header;