import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import navigationReducer from './NavigationReducer.js';

let reducersBunch = combineReducers({
	profileReducer,
	dialogsReducer,
	navigationReducer,
});

let store = createStore(reducersBunch);



export default store;