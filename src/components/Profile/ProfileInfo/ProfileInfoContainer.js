import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profileReducer.js'
import ProfileInfo from './ProfileInfo.js'

const ProfileInfoContainer = (props) => {
	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	let onPost = (text) => {
		props.dispatch(updateNewPostTextActionCreator(text))
	}
	return (
		<ProfileInfo addPost={addPost} updateNewPostText={onPost} newPostText={props.store.profileReducer.newPostText}/>
	)
}

export default ProfileInfoContainer