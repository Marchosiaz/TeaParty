import React from 'react';
import Header from './Header.js';
import {connect} from 'react-redux';
import usersAPI from '../../api/api.js'; 
import {setAuthUserData, getMyProfileInHeader} from '../../redux/Reducers/authReducer.js';
import Preloader from '../Users/Preloader/Preloader.js';

class HeaderContainer extends React.Component {

	componentDidMount() {

		this.props.getMyProfileInHeader();

	};

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
	getMyProfileInHeader
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

















