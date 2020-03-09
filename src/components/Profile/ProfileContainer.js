import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import Profile from './Profile.js';
import {setUserInProfilePage} from '../../redux/Reducers/profileReducer.js';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (userId == undefined) {
			userId = 2;
		}

		this.props.setUserInProfilePage(userId);
	}

	render() {
		if (!this.props.isAuth) return <Redirect to={'/login'}/>
		return <Profile/>
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth
	}
}


let mapDispatcToProps = {
	setUserInProfilePage
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatcToProps)(WithUrlDataContainerComponent);