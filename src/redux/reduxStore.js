import {createStore, combineReducers} from 'redux';
import profileReducer from './Reducers/profileReducer.js';
import dialogsReducer from './Reducers/dialogsReducer.js';
import navigationReducer from './Reducers/NavigationReducer.js';
import usersReducer from './Reducers/UsersReducer.js';

let reducersBunch = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	navPage: navigationReducer,
	usersPage: usersReducer,
});

let store = createStore(reducersBunch);



export default store;