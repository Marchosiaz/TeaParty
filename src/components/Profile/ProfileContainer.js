import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter, Redirect} from 'react-router-dom';
import Profile from './Profile.js';
import {setUserInProfilePage, getStatus} from '../../redux/Reducers/profileReducer.js';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (userId == undefined) {
			userId = 2;
		}

		this.props.setUserInProfilePage(userId);
		this.props.getStatus(userId);
	}

	render() {
		return <Profile />
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth,
	}
}


let mapDispatchToProps = {
	setUserInProfilePage,
	getStatus,
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect)
(ProfileContainer)