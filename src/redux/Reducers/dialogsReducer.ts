import { InitialStateType } from "./types/DialogsTypes";

export const ADD_MY_MESSAGE = 'dialogsPage/ADD-MY-MESSAGE';

let initialState: InitialStateType = {

	dialogs: [
		{ id: 22, name: 'Tyoma22', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH' },
		{ id: 2, name: 'Tyoma2', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXy_NK2lz5lMoWg9UY6MHZKfB7ZhZHJnLo1JtBh1hMlAhvgBa7' },
		{ id: 3, name: 'Tyoma3', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3' },
		{ id: 10, name: 'Tyoma0', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIrnwobOPcbnVXb1dv_CyabhKNzaOd1r9QBw8CyFljH-NEvkJ_' },],

	messages: [
		{ id: 11, reply: 'Hello, I am ur daddy', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH' },
		{ id: 12, reply: 'Kek', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRW7RXP7cJBscjNG5CGjzazNFw_ro5jySl5uwMsvKDoPjYFPGAH' }],

	myMessages: [
		{ id: 1203, reply: 'KEkie', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3' },],

};

const dialogsReducer = (state = initialState, action: any) => {

	switch (action.type) {
		case ADD_MY_MESSAGE:
			let body = action.message;
			return {
				...state,
				myMessages: [...state.myMessages, { id: 123, reply: body, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3' }],
			};
		default:
			return state;
	};
};


//export const addNewMessage = (message: string) => ({ type: ADD_MY_MESSAGE, message })

export default dialogsReducer