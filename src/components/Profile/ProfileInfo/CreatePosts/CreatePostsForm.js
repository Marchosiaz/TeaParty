import React from 'react';
import s from './CreatePosts.module.css'
import {Field, reduxForm} from 'redux-form';

const CreatePostsForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div className={s.text}>
			<Field className={s.textarea} component={'textarea'} name={'profileTextField'}/>
				<div className={s.divButt}>
					<button className={s.butt}>Add post</button>
				</div>
		</div>
	</form>
}

const CreatePostsReduxForm = reduxForm({
  form: 'createPosts'
})(CreatePostsForm)

export default CreatePostsReduxForm;