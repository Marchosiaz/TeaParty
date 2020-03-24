import React, {PureComponent} from 'react'
import s from './MyPosts.module.css'
import Post from './post/Post.js'

const MyPosts = React.memo(props => {
	
	let p = props.posts.map(el => <Post message={el.message} key={el.id} countLike={el.countLike}/>)

	return <div>{p}</div>
})

export default MyPosts