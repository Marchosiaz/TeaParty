import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Preloader from './components/Common/Preloader/Preloader.js';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Navigation from './components/Navigation/Navigation.js';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import UsersContainer from './components/Users/UsersContainer.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';
import LoginContainer from './components/Login/LoginContainer.js';
import {BrowserRouter, Route} from 'react-router-dom';
import {initializeApp} from './redux/Reducers/AppReducer.js';
import store from './redux/reduxStore.js';
import {Provider} from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  };

  render() {
    if (!this.props.initialized) 
      return <Preloader />
    else {
          return <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
          <Route path='/dialogs' render={() => <Dialogs />}/>
          <Route path='/login' render={() => <LoginContainer />}/>
          <Route path='/users' render={() => <UsersContainer />}/>
          <Route path='/news' render={() => <News />}/>
          <Route path='/music' render={() => <Music />}/>
          <Route path='/settings' render={() => <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
    }
  };
};

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
};

let mapDispatchToProps = {
     initializeApp, 
}

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App)

const MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}> 
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp