import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false

		})
	}

	render() {
		return <div>
			{!this.state.editMode &&
				<div onDoubleClick={this.activateEditMode} className={s.status}>{this.props.status}</div>
			}
			{this.state.editMode &&
				<div><input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/></div>
			}
		</div>
	}
}

export default ProfileStatus;