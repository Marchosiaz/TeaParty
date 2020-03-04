import React from 'react';
import Header from './Header.js';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {setAuthUserData} from '../../redux/Reducers/authReducer.js';

class HeaderContainer extends React.Component {

	componentDidMount() {

		axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
			withCredentials: true
		}).then(response => {
			if (response.data.resultCode === 0) {
				let {id, email, login} = response.data.data;
				this.props.setAuthUserData(id, email, login)
			}
		})

	};

	render() {
		return <Header {...this.props}/>

	};
};


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

let mapDispatchToProps = {
	setAuthUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

















