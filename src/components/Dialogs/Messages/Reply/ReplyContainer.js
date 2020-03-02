import React from 'react';
import {recordingNewMessage, addNewMessage} from './../../../../redux/Reducers/dialogsReducer.js';
import Reply from './Reply.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		myMessage: state.dialogsPage.myMessage,
	}
};

let mapDispatchToProps = {
	recordingNewMessage,
	addNewMessage,
}


export default connect(mapStateToProps, mapDispatchToProps)(Reply);


















