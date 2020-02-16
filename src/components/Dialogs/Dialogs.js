import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import DialogsItem from './User_dialogs/DialogsItem.js'
import Messages from './Messages/Messages.js'

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<DialogsItem dialogs={props.dialogs}/>
			<Messages dispatch={props.dispatch} newMessage={props.newMessage} messages={props.messages}/>
		</div>
	)
}

export default Dialogs