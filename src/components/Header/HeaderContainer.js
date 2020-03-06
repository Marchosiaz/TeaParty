import React from 'react';
import Header from './Header.js';
import {connect} from 'react-redux';
import usersAPI from '../../api/api.js'; 
import {setAuthUserData} from '../../redux/Reducers/authReducer.js';

class HeaderContainer extends React.Component {

	componentDidMount() {

		usersAPI.getMyProfileInHeader().then(data => {
			if (data.resultCode === 0) {
				let {id, email, login} = data.data;
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

















