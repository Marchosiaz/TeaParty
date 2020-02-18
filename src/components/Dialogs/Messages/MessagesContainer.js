import React from 'react';
import Messages from './Messages.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		myMessages: state.dialogsPage.myMessages,
		myMessage: state.dialogsPage.myMessage,
		messages: state.dialogsPage.messages
	}
};

let mapDispatchToProps = (dispatch) => {
	return {

	}
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;