import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import {requiredField, maxLengthInLoginCreator} from '../../utils/validators/validators.js';
import {Input} from '../Common/FormControls/FormControls.js';

const maxLength = maxLengthInLoginCreator(20);

const LoginForm = (props) => {
	return <div>
		<form onSubmit={props.handleSubmit}>
			<div><Field component={Input} name={'login'} placeholder={'login'} validate={[requiredField, maxLength]}/></div>
			<div><Field component={Input} validate={[requiredField, maxLength]}  name={'password'} type='password' placeholder={'password'}/></div>
			<div><Field component={'input'} name={'rememberMe'} type={'checkbox'}/></div>Remember me
			<div><button>login</button></div>
		</form>
	</div>
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)


const Login = (props) => {

	const onSubmit = (formData) => {
		console.log(formData)
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
}



export default Login;