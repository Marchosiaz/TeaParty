import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './Reducers/profileReducer.js';
import dialogsReducer from './Reducers/dialogsReducer.js';
import navigationReducer from './Reducers/NavigationReducer.js';
import usersReducer from './Reducers/UsersReducer.js';
import authReducer from './Reducers/authReducer.js';
import appReducer from './Reducers/AppReducer.js';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

let reducersBunch = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	navPage: navigationReducer,
	usersPage: usersReducer,
	app: appReducer,
	auth: authReducer,
	form: formReducer
});

//let store = createStore(reducersBunch, applyMiddleware(thunk));

const store = createStore(reducersBunch, composeWithDevTools(
	applyMiddleware(thunk),
));


export default store;