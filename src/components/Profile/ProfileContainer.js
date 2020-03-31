import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter, Redirect} from 'react-router-dom';
import Profile from './Profile.js';
import {setUserInProfilePage, getStatus} from '../../redux/Reducers/profileReducer.js';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }

		this.props.setUserInProfilePage(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId != prevProps.match.userId) {
			this.refreshProfile();
		}
	}

	render() {
		return <Profile {...this.props}/>
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isAuth: state.auth.isAuth,
		authorizedUserId: state.auth.userId
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