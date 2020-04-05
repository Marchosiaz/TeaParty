import React from 'react';
import Header from './Header.js';
import { connect } from 'react-redux';
import { LogOut } from '../../redux/Reducers/authReducer';
import { setAuthUserData } from '../../redux/Reducers/ActionCreators/AuthActionCreators'

class HeaderContainer extends React.Component {

	render() {
		return <Header {...this.props} />

	};
};


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
	}
}

let mapDispatchToProps = {
	setAuthUserData,
	LogOut
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

















