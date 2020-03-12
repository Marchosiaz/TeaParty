import React from 'react'
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

	let hasError = meta.touched && meta.error;

	return <div>
		<div>
			<textarea className={(hasError) ? s.textareacss + ' ' + s.error : s.textareacss} {...input} {...props}/>
		</div>
		{hasError && <span>Max length of symbols is 50</span>}
	</div>
}


export const Input = ({input, meta, ...props}) => {

	let hasError = meta.touched && meta.error;

	return <div>
		<div>
			<input className={(hasError) ? s.input + ' ' + s.error : s.input} {...input} {...props}/>
		</div>
		{hasError && <span>Field is Required</span>}
	</div>
}
