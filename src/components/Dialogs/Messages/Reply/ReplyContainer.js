import React from 'react';
import {recordingNewMessageActionCreator, addNewMessageActionCreator} from './../../../../redux/dialogsReducer.js';
import Reply from './Reply.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		myMessage: state.dialogsPage.myMessage,
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {dispatch(addNewMessageActionCreator())},
		recordingNewMessage: (text) => {dispatch(recordingNewMessageActionCreator(text))},
	}
};


const ReplyContainer = connect(mapStateToProps, mapDispatchToProps)(Reply);

export default ReplyContainer;

















