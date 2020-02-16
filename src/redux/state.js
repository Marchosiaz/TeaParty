const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'


let store = {

	_state: {
		profilePage: {
		posts: [
		{id: 1, message: 'Hello', countLike:'12'},
		{id: 2, message: 'Hex', countLike:'97'},],

		newPostText: '',
		},

		dialogsPage: {

		newMessage: '',

		dialogs: [
		{id: 22, name: 'Tyoma22', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH'},
		{id: 2, name: 'Tyoma2', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXy_NK2lz5lMoWg9UY6MHZKfB7ZhZHJnLo1JtBh1hMlAhvgBa7'},
		{id: 3, name: 'Tyoma3', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3'},
		{id: 10, name: 'Tyoma0', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIrnwobOPcbnVXb1dv_CyabhKNzaOd1r9QBw8CyFljH-NEvkJ_'},],

		messages: [
		{reply: 'Hello, I am ur daddy', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH'},],

		},

		navFriends: [
		{name: 'Tyoma22', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH'},
		{name: 'Tyoma2', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXy_NK2lz5lMoWg9UY6MHZKfB7ZhZHJnLo1JtBh1hMlAhvgBa7'},
		{name: 'Tyoma3', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3'}
		],},

	_callSubscriber() {},

	subscribe(observer) {this._callSubscriber = observer},

	getState() {return this._state},

	dispatch(action) {
		if (action.type === ADD_POST) {
				let newpost = {
				id: 32,
				message: this._state.profilePage.newPostText,
				countLike: 0}
			this._state.profilePage.posts.push(newpost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber()} 
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.text
			this._callSubscriber()} 
		else if (action.type === ADD_NEW_MESSAGE) {
			this._state.dialogsPage.newMessage = action.message
			this._callSubscriber()}
	},

}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export const addNewMessageActionCreator = (message) => ({type: ADD_NEW_MESSAGE, message: message})


export default store








 