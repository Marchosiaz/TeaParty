import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Profile from './Profile.js';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/Reducers/profileReducer.js';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (userId == undefined) {
			userId = 2;
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
			this.props.setUserProfile(response.data)
		})
	}

	render() {
		return <Profile/>
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
	}
}


let mapDispatcToProps = {
	setUserProfile
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatcToProps)(WithUrlDataContainerComponent);