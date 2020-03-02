import React from 'react';
import s from './CreatePosts.module.css'


const CreatePosts = (props) => {
	return <div>
		<div>My Post</div>
			<div>Write a new post</div>
			<div className={s.text}>
			<textarea onChange={props.onPostChange} className={s.textarea} ref={props.newPostElement} value={props.newPostText}/>
				<div className={s.divButt}>
					<button onClick={props.onaddPost} className={s.butt}>Add post</button>
					<button className={s.butt2}>Remove</button>
				</div>
			</div>
		</div>
};

export default CreatePosts;