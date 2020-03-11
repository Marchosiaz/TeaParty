import React from 'react';
import {addNewMessage} from './../../../../redux/Reducers/dialogsReducer.js';
import Reply from './Reply.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		myMessage: state.dialogsPage.myMessage,
	}
};

let mapDispatchToProps = {
	addNewMessage,
}


export default connect(mapStateToProps, mapDispatchToProps)(Reply);


















