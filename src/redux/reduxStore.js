import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './Reducers/profileReducer.js';
import dialogsReducer from './Reducers/dialogsReducer.js';
import navigationReducer from './Reducers/NavigationReducer.js';
import usersReducer from './Reducers/UsersReducer.js';
import authReducer from './Reducers/authReducer.js';
import thunk from 'redux-thunk';

let reducersBunch = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	navPage: navigationReducer,
	usersPage: usersReducer,
	auth: authReducer,
});

let store = createStore(reducersBunch, applyMiddleware(thunk));



export default store;