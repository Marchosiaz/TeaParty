import React from 'react'
import {recordingNewMessageActionCreator, addNewMessageActionCreator} from './../../../../redux/dialogsReducer.js'
import Reply from './Reply.js'

const ReplyContainer = (props) => {
	//This function record text
	let f = () => {
		props.dispatch(addNewMessageActionCreator())
	}

	//This function add text to store 
	let onAddMessage = (text) => {
		props.dispatch(recordingNewMessageActionCreator(text))
	}
	return (
		<Reply recordingNewMessage={f} addMessage={onAddMessage} myMessage={props.myMessage}/>
	)
}

export default ReplyContainer