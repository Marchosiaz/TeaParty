import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import DialogsItem from './User_dialogs/DialogsItem.js'
import Messages from './Messages/Messages.js'

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<DialogsItem dialogs={props.store.dialogsReducer.dialogs}/>
			<Messages dispatch={props.dispatch} 
			myMessages={props.store.dialogsReducer.myMessages} 
			myMessage={props.store.dialogsReducer.myMessage} 
			messages={props.store.dialogsReducer.messages}/>
		</div>
	)
}

export default Dialogs