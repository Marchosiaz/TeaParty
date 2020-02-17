import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header.js'
import Navigation from './components/Navigation/Navigation.js'
import Profile from './components/Profile/Profile.js'
import Dialogs from './components/Dialogs/Dialogs.js'
import News from './components/News/News.js'
import Music from './components/Music/Music.js'
import Settings from './components/Settings/Settings.js'
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation navFriends={props.state.navFriends}/>
        <div className='app-wrapper-content'>
      		<Route exact path='/profile' render={() => <Profile 
            dispatch={props.dispatch} 
            newPostText={props.newPostText}
            posts={props.state.profilePage.posts}/>}/>
          <Route path='/dialogs' render={() => 
            <Dialogs 
            myMessage={props.myMessage}
            myMessages={props.state.dialogsPage.myMessages} 
            dispatch={props.dispatch} 
            dialogs={props.state.dialogsPage.dialogs} 
            messages={props.state.dialogsPage.messages}/>}/>
          <Route path='/news' render={() => <News />}/>
          <Route path='/music' render={() => <Music />}/>
          <Route path='/settings' render={() => <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
