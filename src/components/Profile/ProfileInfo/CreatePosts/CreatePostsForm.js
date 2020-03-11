import React from 'react';
import s from './CreatePosts.module.css'
import {Field, reduxForm} from 'redux-form';
import {requiredField, maxLengthCreator} from '../../../../utils/validators/validators.js';
import {Textarea} from '../../../Common/FormControls/FormControls.js'

const maxLength50 = maxLengthCreator(50);

const CreatePostsForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div className={s.text}>
			<Field component={Textarea} name={'profileTextField'} validate={[requiredField, maxLength50]}/>
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