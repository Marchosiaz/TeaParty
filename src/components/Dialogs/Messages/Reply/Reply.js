import React from 'react';
import s from './Reply.module.css';

const Reply = (props) => {
	let newReplyElement = React.createRef();

	let recordMessage = () => {
		let text = newReplyElement.current.value;
		props.recordingNewMessage(text);
	};

	let onAddMessage = () => {
		props.addMessage();
	};
	return (
		<div className={s.reply}>
			<textarea onChange={recordMessage} value={props.myMessage} ref={newReplyElement} className={s.text}/>
			<div><button onClick={onAddMessage} className={s.button}>Send</button></div>
		</div>
	)
};										

export default Reply;