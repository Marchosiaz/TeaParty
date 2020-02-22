import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

	let newPostElement = React.createRef();

	let onaddPost = () => {
		props.addPost()
	}

	let onPostChange = () => {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
	}
	return (
		<div className={s.posts}>
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
	)
}

export default ProfileInfo