import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogsItemContainer from './User_dialogs/DialogsItemContainer.js';
import MessagesContainer from './Messages/MessagesContainer.js';

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<DialogsItemContainer/>
			<MessagesContainer/>
		</div>
	)
};

export default Dialogs;