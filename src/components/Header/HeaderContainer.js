import React from 'react';
import Header from './Header.js';
import {connect} from 'react-redux';
import usersAPI from '../../api/api.js'; 
import {setAuthUserData, LogOut} from '../../redux/Reducers/authReducer.js';
import Preloader from '../Common/Preloader/Preloader.js';

class HeaderContainer extends React.Component {

	render() {
		return <Header {...this.props}/>

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

















