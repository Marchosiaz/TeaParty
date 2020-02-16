import React from 'react'
import s from './ProfileInfo.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/state.js'

const ProfileInfo = (props) => {
	let newPostElement = React.createRef();
	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	let onPostChange = () => {
		let text =newPostElement.current.value
		props.dispatch(updateNewPostTextActionCreator(text))
	}
	return (
		<div className={s.posts}>
			<div>My Post</div>
			<div>Write a new post</div>
			<div className={s.text}>
			<textarea onChange={onPostChange} className={s.textarea} ref={newPostElement} value={props.newPostText}/>
				<div className={s.divButt}>
					<button onClick={addPost} className={s.butt}>Add post</button>
					<button className={s.butt2}>Remove</button>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo