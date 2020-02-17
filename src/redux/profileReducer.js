const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
	posts: [
		{id: 1, message: 'Hello', countLike:'12'},
		{id: 2, message: 'Hex', countLike:'97'},],

		newPostText: '',
}


const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST:
			let newpost = {
				id: 32,
				message: state.newPostText,
				countLike: 0
			}
			state.posts.push(newpost)
			state.newPostText = ''
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.text
			return state
		default: 
			return state
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})


export default profileReducer