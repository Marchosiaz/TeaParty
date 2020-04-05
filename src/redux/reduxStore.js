import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './Reducers/profileReducer';
import dialogsReducer from './Reducers/dialogsReducer';
import navigationReducer from './Reducers/NavigationReducer';
import usersReducer from './Reducers/UsersReducer.js';
import authReducer from './Reducers/authReducer';
import appReducer from './Reducers/AppReducer';
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