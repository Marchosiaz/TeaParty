import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import navigationReducer from './NavigationReducer.js';

let reducersBunch = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	navPage: navigationReducer,
});

let store = createStore(reducersBunch);



export default store;