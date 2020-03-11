import React from 'react';
import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props) => {
	return <div>
		<form onSubmit={props.handleSubmit}>
			<div><Field component={'input'} name={'login'} placeholder={'login'}/></div>
			<div><Field component={'input'} name={'password'} type='password' placeholder={'password'}/></div>
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