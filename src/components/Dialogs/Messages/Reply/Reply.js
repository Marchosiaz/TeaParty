import React from 'react'
import s from './Reply.module.css'
import {addNewMessageActionCreator} from './../../../../redux/state.js'

const Reply = (props) => {
	let newReplyElement = React.createRef();
	let f = () => {
		let text = newReplyElement.current.value;
		alert(text)
	}

	let addMessage = () => {
		let text = newReplyElement.current.value;
		props.dispatch(addNewMessageActionCreator(text))
	}
	return (
		<div className={s.reply}>
			<textarea onChange={addMessage} value={props.newMessage} ref={newReplyElement} className={s.text}/>
			<div><button onClick={f} className={s.button}>Send</button></div>
		</div>
	)
}

export default Reply