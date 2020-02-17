import React from 'react'
import s from './Reply.module.css'
import {recordingNewMessageActionCreator, addNewMessage} from './../../../../redux/dialogsReducer.js'

const Reply = (props) => {
	let newReplyElement = React.createRef();
	let f = () => {
		let text = newReplyElement.current.value;
		props.dispatch(addNewMessage())
	}

	let addMessage = () => {
		let text = newReplyElement.current.value;
		props.dispatch(recordingNewMessageActionCreator(text))
	}
	return (
		<div className={s.reply}>
			<textarea onChange={addMessage} value={props.myMessage} ref={newReplyElement} className={s.text}/>
			<div><button onClick={f} className={s.button}>Send</button></div>
		</div>
	)
}

export default Reply