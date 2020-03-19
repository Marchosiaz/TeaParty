import React, {useState, useEffect} from 'react';
import s from './ProfileStatus.module.css';
import Preloader from '../../../../Common/Preloader/Preloader.js'

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMpode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status)
	}, [props.status]);

	const activateEditMode = () => {
		setEditMpode(true)
	}

	const deactivateEditMode = () => {
		setEditMpode(false)
		props.updateStatus(status)
	}

	const changeStatus = (e) => {
		setStatus(e.currentTarget.value)
	}

	return <div>
			{!editMode &&
				<div onDoubleClick={activateEditMode} className={s.status}>{props.status}</div>
			}
			{editMode &&
				<div><input onChange={changeStatus} value={status} onBlur={deactivateEditMode} autoFocus={true}/></div>
			}
		</div>
}

export default ProfileStatusWithHooks;