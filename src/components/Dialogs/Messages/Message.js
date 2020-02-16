import React from 'react'
import s from './Message.module.css'

const Message = (props) => {
	return (
		<div className={s.messages}>
			<img className={s.ava} src={props.ava}/>
			<div className={s.message}>{props.reply}</div>
		</div>
	)
}

export default Message