import React from 'redux';
import { connect } from 'react-redux';
import Login from './Login.js';
import { LoginUpdate } from '../../redux/Reducers/authReducer';


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		captchaURL: state.auth.captchaURL
	}
}

let mapDispatchToProps = {
	LoginUpdate
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);