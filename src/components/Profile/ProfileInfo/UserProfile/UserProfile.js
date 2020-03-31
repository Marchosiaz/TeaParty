import React from 'react';
import lookingForAJob from '../../../../assets/images/lookingForAJob.jpg';
import myJob from '../../../../assets/images/myJob.jpg';
import userPhoto from '../../../../assets/images/anonym.png';
import s from './UserProfile.module.css';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks.js'

const UserProfile = (props) => {

	const chooseMainImgForYourProfile = (e) => {
		if (e.target.files.length) {
			props.savePhoto(e.target.files[0])
		}
	}

	return (
		<div className={s.profile}>
				<div className={s.infoAboutMe}>
					<div><img className={s.photo} src={props.largePhoto || props.smallPhoto || userPhoto} alt={props.fullName}/></div>
					<div className={s.fullName}>{props.fullName}</div>
					<ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
				</div>
				<div className={s.aboutJob}>
					<div>{(props.lookingForAJob == true) ? 
						<img className={s.jobImg} src={lookingForAJob} /> : 
						<img className={s.jobImg} src={myJob} />}</div>
					<div className={s.jobDescripton}>{props.lookingForAJobDescription}</div>
				</div>
				<div>
					Choose ur ava
					<input type='file' onChange={chooseMainImgForYourProfile}/>
				</div>
			</div>
	)
}

export default UserProfile;