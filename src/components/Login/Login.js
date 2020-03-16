import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import {requiredField, maxLengthInLoginCreator} from '../../utils/validators/validators.js';
import {Input} from '../Common/FormControls/FormControls.js';
import {Redirect} from 'react-router-dom'

const maxLength = maxLengthInLoginCreator(30);

const LoginForm = (props) => {
	return <div>
		<form onSubmit={props.handleSubmit}>
			<div><Field type={'email'} component={Input} name={'email'} placeholder={'login'} validate={[requiredField, maxLength]}/></div>
			<div><Field component={Input} validate={[requiredField]}  name={'password'} type='password' placeholder={'password'}/></div>
			<div><Field component={'input'} name={'rememberMe'} type={'checkbox'}/></div>Remember me
			{props.error && <div className={s.error}><p>{props.error}</p></div>}
			<div><button>login</button></div>
		</form>
	</div>
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)


const Login = (props) => {

	const onSubmit = (formData) => {
		props.LoginUpdate(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={"profile"} />
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
}



export default Login;