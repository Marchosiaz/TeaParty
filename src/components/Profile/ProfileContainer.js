import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile.js';
import * as axios from 'axios';
import {setUserProfile} from '../../redux/Reducers/profileReducer.js';

class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

export default connect(mapStateToProps, mapDispatcToProps)(ProfileContainer);