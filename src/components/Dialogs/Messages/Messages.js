import React from 'react';
import s from './Messages.module.css';
import Message from './Message.js';
import ReplyContainer from './Reply/ReplyContainer.js';
import MyMessage from './MyMessage/MyMessage.js';

const Messages = (props) => {
	let m = props.messages.map(el => <Message reply={el.reply} key={el.id} ava={el.ava}/>);
	let myReply = props.myMessages.map(el => <MyMessage reply={el.reply} key={el.id} ava={el.ava}/>);
	return (
		<div className={s.messages}>
			{m}
			{myReply}
			<ReplyContainer myMessage={props.myMessage} dispatch={props.dispatch} />
		</div>
	)
};

export default Messages;