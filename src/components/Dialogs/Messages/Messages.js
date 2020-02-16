import React from 'react'
import s from './Messages.module.css'
import Message from './Message.js'
import Reply from './Reply/Reply.js'

const Messages = (props) => {
	let m = props.messages.map(el => <Message reply={el.reply} ava={el.ava}/>)
	return (
		<div className={s.messages}>
			{m}
			<Reply newMessage={props.newMessage} dispatch={props.dispatch} />
		</div>
	)
}

export default Messages