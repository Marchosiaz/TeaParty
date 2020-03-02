import React from 'react';
import s from './ProfileInfo.module.css';
import PreLoader from '../../Users/Preloader/Preloader.js';
import lookingForAJob from '../../../assets/images/lookingForAJob.jpg';
import myJob from '../../../assets/images/myJob.jpg';


const ProfileInfo = (props) => {

	let newPostElement = React.createRef();

	let onaddPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}

	if (!props.profile) {return <PreLoader />} 
	else { return (
		<div className={s.posts}>
			<div className={s.profile}>
				<div className={s.infoAboutMe}>
					<div><img className={s.photo} src={props.profile.photos.large || props.profile.photos.small} alt={props.profile.fullName}/></div>
					<div className={s.fullName}>{props.profile.fullName}</div>
					<div className={s.aboutMe}>{props.profile.aboutMe}</div>
				</div>
				<div className={s.aboutJob}>
					<div>{(props.profile.lookingForAJob == true) ? 
						<img className={s.jobImg} src={lookingForAJob} /> : 
						<img className={s.jobImg} src={myJob} />}</div>
					<div className={s.jobDescripton}>{props.profile.lookingForAJobDescription}</div>
				</div>
			</div>
			<div>My Post</div>
			<div>Write a new post</div>
			<div className={s.text}>
			<textarea onChange={onPostChange} className={s.textarea} ref={newPostElement} value={props.newPostText}/>
				<div className={s.divButt}>
					<button onClick={onaddPost} className={s.butt}>Add post</button>
					<button className={s.butt2}>Remove</button>
				</div>
			</div>
		</div>
	)}
}

export default ProfileInfo