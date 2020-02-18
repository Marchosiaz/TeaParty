import React from 'react';
import s from './Reply.module.css';

const Reply = (props) => {
	let newReplyElement = React.createRef();
	let recordMessage = () => {
		props.recordingNewMessage();
	};

	let onAddMessage = () => {
		let text = newReplyElement.current.value;
		props.addMessage(text);
	};
	return (
		<div className={s.reply}>
			<textarea onChange={onAddMessage} value={props.myMessage} ref={newReplyElement} className={s.text}/>
			<div><button onClick={recordMessage} className={s.button}>Send</button></div>
		</div>
	)
};										

export default Reply;