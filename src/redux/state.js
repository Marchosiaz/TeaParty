import profileReducer from './profileReducer.js'
import dialogsReducer from './dialogsReducer.js'


let store = {

	_state: {
		profilePage: {
		posts: [
		{id: 1, message: 'Hello', countLike:'12'},
		{id: 2, message: 'Hex', countLike:'97'},],

		newPostText: '',
		},

		dialogsPage: {

		myMessage: '',

		dialogs: [
		{id: 22, name: 'Tyoma22', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH'},
		{id: 2, name: 'Tyoma2', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXy_NK2lz5lMoWg9UY6MHZKfB7ZhZHJnLo1JtBh1hMlAhvgBa7'},
		{id: 3, name: 'Tyoma3', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3'},
		{id: 10, name: 'Tyoma0', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIrnwobOPcbnVXb1dv_CyabhKNzaOd1r9QBw8CyFljH-NEvkJ_'},],

		messages: [
		{reply: 'Hello, I am ur daddy', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH'},
		{reply: 'Kek', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH'}],

		myMessages: [
		{reply: 'KEkie', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3'},],

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
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

		this._callSubscriber()
	},

}


export default store








 