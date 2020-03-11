import React from 'react';
import s from './Reply.module.css';
import {Field, reduxForm} from 'redux-form';

const ReplyForm = (props) => {
	return 	<form onSubmit={props.handleSubmit}>
		<div className={s.reply}>
			<Field className={s.text} component={'textarea'} name={'textfield'} placeholder={'enter ur message'}/>
			<div><button className={s.button}>Send</button></div>
		</div>
	</form>
}


const ReplyFormReduxform = reduxForm({
  form: 'reply'
})(ReplyForm)


export default ReplyFormReduxform;