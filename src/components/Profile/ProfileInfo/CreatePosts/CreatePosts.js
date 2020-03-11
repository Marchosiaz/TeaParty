import React from 'react';
import CreatePostsForm from './CreatePostsForm.js';


const CreatePosts = (props) => {

	let sendMessagePost = (data) => {
		props.onaddPost(data.profileTextField)
	}

	return <div>
		<div>My Post</div>
			<div>Write a new post</div>
			<CreatePostsForm onSubmit={sendMessagePost}/>
		</div>
};

export default CreatePosts;