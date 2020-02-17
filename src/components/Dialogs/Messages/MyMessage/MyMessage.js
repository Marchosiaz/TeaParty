import React from 'react'
import s from './MyMessage.module.css'

const MyMessage = (props) => {
	return (
		<div className={s.myMessage}>
			<img className={s.ava} src={props.ava}/>
			<div className={s.reply}>{props.reply}</div>
		</div>
	)
}

export default MyMessage