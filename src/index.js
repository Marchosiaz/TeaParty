import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state.js'
import * as serviceWorker from './serviceWorker';

let rerenderEntireTree = () => {
	ReactDOM.render(<App 
		state={store.getState()} 
		dispatch={store.dispatch.bind(store)} 
		myMessage={store.getState().dialogsPage.myMessage}   
		newPostText={store.getState().profilePage.newPostText}/>, document.getElementById('root'));	
}

rerenderEntireTree(store.getState());
 
store.subscribe(rerenderEntireTree)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


