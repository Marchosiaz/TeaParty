const RECORDING_NEW_MESSAGE_TO_STORE = 'RECORDING-NEW-MESSAGE-TO-STORE'
const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE'


const dialogsReducer = (state, action) => {
	switch (action.type) {
		case RECORDING_NEW_MESSAGE_TO_STORE:
			state.myMessage = action.message
			return state
		case ADD_MY_MESSAGE:
			let body = state.myMessage
			state.myMessages.push({reply: body, ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6xb4svS2NCAlQUGXmFOF6VVvDycCD6EApj2zhEZ7Syv5Ig9l3'})
			state.myMessage = ''
			return state
		default:
			return state
	}
}


export const recordingNewMessageActionCreator = (message) => ({type: RECORDING_NEW_MESSAGE_TO_STORE, message: message})

export const addNewMessage = () => ({type: ADD_MY_MESSAGE})

export default dialogsReducer