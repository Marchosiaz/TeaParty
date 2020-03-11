import React from 'react';
import s from './ProfileInfo.module.css';
import CreatePosts from './CreatePosts/CreatePosts.js';
import PreLoader from '../../Users/Preloader/Preloader.js';
import UserProfile from './UserProfile/UserProfile.js';


const ProfileInfo = (props) => {

	let onaddPost = (postMessage) => {props.addPost(postMessage)}

	if (!props.profile) { return <PreLoader />} 

	return <div className={s.posts}>
			<UserProfile largePhoto={props.profile.photos.large}
				smallPhoto={props.profile.photos.small} 
				fullName={props.profile.fullName}
				status={props.status}
				updateStatus={props.updateStatus}
				lookingForAJob={props.profile.lookingForAJob}
				lookingForAJobDescription={props.profile.lookingForAJobDescription}/>

			<CreatePosts
				onaddPost={onaddPost}/>
			</div>
}

export default ProfileInfo