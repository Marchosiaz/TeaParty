import React from 'react';
import ReplyForm from './ReplyForm.js';

const Reply = (props) => {

	let addMessage = (data) => {
		props.addNewMessage(data.textfield)
	}
	return (
		<ReplyForm onSubmit={addMessage}/>
	)
};										

export default Reply;