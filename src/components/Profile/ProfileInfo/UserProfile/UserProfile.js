import React from 'react';
import lookingForAJob from '../../../../assets/images/lookingForAJob.jpg';
import myJob from '../../../../assets/images/myJob.jpg';
import s from './UserProfile.module.css';

const UserProfile = (props) => {
	return (
		<div className={s.profile}>
				<div className={s.infoAboutMe}>
					<div><img className={s.photo} src={props.largePhoto || props.smallPhoto} alt={props.fullName}/></div>
					<div className={s.fullName}>{props.fullName}</div>
					<div className={s.aboutMe}>{props.aboutMe}</div>
				</div>
				<div className={s.aboutJob}>
					<div>{(props.lookingForAJob == true) ? 
						<img className={s.jobImg} src={lookingForAJob} /> : 
						<img className={s.jobImg} src={myJob} />}</div>
					<div className={s.jobDescripton}>{props.lookingForAJobDescription}</div>
				</div>
			</div>
	)
}

export default UserProfile;