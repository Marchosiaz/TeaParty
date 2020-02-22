import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Navigation from './components/Navigation/Navigation.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import UsersContainer from './components/Users/UsersContainer.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
      		<Route exact path='/profile' render={() => <Profile />}/>
          <Route path='/dialogs' render={() => <Dialogs />}/>
          <Route path='/users' render={() => <UsersContainer />}/>
          <Route path='/news' render={() => <News />}/>
          <Route path='/music' render={() => <Music />}/>
          <Route path='/settings' render={() => <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
