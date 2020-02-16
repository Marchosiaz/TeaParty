import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './DialogItem.module.css'

const DialogItem = (props) => {
	return (
			<div className={s.user_dialogs}>
				<div className={s.active}>
					<NavLink to={'/dialogs/' + props.id} className={s.name}>
					<img className={s.ava} src={props.ava}/>
					{props.name}
					</NavLink>
				</div>
			</div>	
	)
}


export default DialogItem