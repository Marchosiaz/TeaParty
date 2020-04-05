import profileReducer, { addPost, deletePost } from './profileReducer';

let state = {
	posts: [
		{ id: 1, message: 'Hello', countLike: '12' },
		{ id: 2, message: 'Hex', countLike: '97' },],
};


it('length of posts should be 3', () => {
	let action = addPost()

	let newState = profileReducer(state, action)
	expect(newState.posts.length).toBe(3)
})

it('third element has to be a string', () => {
	let action = addPost('Hello I am a sobaka')

	let newState = profileReducer(state, action)
	expect(newState.posts[2].message).toBe('Hello I am a sobaka')
})


it('Deleting post', () => {
	let action = deletePost(1)

	let newState = profileReducer(state, action)
	expect(newState.posts.length).toBe(1)
})
