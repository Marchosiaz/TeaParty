import React from 'react'
import s from './Messages.module.css'
import Message from './Message.js'
import Reply from './Reply/Reply.js'
import MyMessage from './MyMessage/MyMessage.js'

const Messages = (props) => {
	console.log(props)
	let m = props.messages.map(el => <Message reply={el.reply} ava={el.ava}/>)
	let myReply = props.myMessages.map(el => <MyMessage reply={el.reply} ava={el.ava}/>)
	return (
		<div className={s.messages}>
			{m}
			{myReply}
			<Reply myMessage={props.myMessage} dispatch={props.dispatch} />
		</div>
	)
}

export default Messages