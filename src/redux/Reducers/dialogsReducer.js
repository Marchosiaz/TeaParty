const RECORDING_NEW_MESSAGE_TO_STORE = 'RECORDING-NEW-MESSAGE-TO-STORE';
const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';

let initialState = {
	myMessage: '',

		dialogs: [
		{id: 22, name: 'Tyoma22', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH'},
		{id: 2, name: 'Tyoma2', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXy_NK2lz5lMoWg9UY6MHZKfB7ZhZHJnLo1JtBh1hMlAhvgBa7'},
		{id: 3, name: 'Tyoma3', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3'},
		{id: 10, name: 'Tyoma0', ava:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIrnwobOPcbnVXb1dv_CyabhKNzaOd1r9QBw8CyFljH-NEvkJ_'},],

		messages: [
		{id: 11, reply: 'Hello, I am ur daddy', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH'},
		{id: 12, reply: 'Kek', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH'}],

		myMessages: [
		{id: 1203, reply: 'KEkie', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3'},],		

};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case RECORDING_NEW_MESSAGE_TO_STORE:
			return {...state, myMessage: action.message}
		case ADD_MY_MESSAGE:
			let body = state.myMessage;
			return {
				...state,
				myMessage: '',
				myMessages: [...state.myMessages, {id: 123, reply: body, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3'}],
			};
		default:
			return state;
	};
};


export const recordingNewMessageActionCreator = (message) => ({type: RECORDING_NEW_MESSAGE_TO_STORE, message: message})

export const addNewMessageActionCreator = () => ({type: ADD_MY_MESSAGE})

export default dialogsReducer