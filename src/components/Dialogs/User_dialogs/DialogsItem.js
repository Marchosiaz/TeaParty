import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './DialogsItem.module.css'
import Dialogitem from './DialogItem.js'

const Dialogsitem = (props) => {
	let d = props.dialogs.map(el => <Dialogitem name={el.name} key={el.id} ava={el.ava}/>)

	return (
			<div className={s.user_dialogs}>
			{d}
			</div>	
	)
}


export default Dialogsitem