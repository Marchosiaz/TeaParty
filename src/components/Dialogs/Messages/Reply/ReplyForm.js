import React from 'react';
import s from './Reply.module.css';
import {Field, reduxForm} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../../utils/validators/validators.js';
import {Textarea} from '../../../Common/FormControls/FormControls.js'

const maxLength50 = maxLengthCreator(50);


const ReplyForm = (props) => {
	return 	<form onSubmit={props.handleSubmit}>
		<div className={s.reply}>
			<Field component={Textarea} validate={[requiredField, maxLength50]} name={'textfield'}/>
			<div><button className={s.button}>Send</button></div>
		</div>
	</form>
}


const ReplyFormReduxform = reduxForm({
  form: 'reply'
})(ReplyForm)


export default ReplyFormReduxform;