import React from 'react';
import s from './ProfileStatus.module.css';
import Preloader from '../../../../Common/Preloader/Preloader.js'

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: 2,
		isPreloader: false
	}

	changeStatus = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
			isPreloader: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false

		})
		this.props.updateStatus(this.state.status)
		this.state.isPreloader = false
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}

	render() {
		return <div>
			{!this.state.editMode &&
				<div onDoubleClick={this.activateEditMode} className={s.status}>{this.props.status}</div>
			}
			{this.state.editMode &&
				<div><input onChange={this.changeStatus} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/></div>
			}
		</div>
	}
}

export default ProfileStatus;