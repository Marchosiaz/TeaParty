import React from 'react';
import DialogsItem from './DialogsItem.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		isAuth: state.auth.isAuth
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
	}
};

const DialogsItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsItem);

export default DialogsItemContainer;