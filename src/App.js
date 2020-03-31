import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Preloader from './components/Common/Preloader/Preloader.js';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Navigation from './components/Navigation/Navigation.js';
//import ProfileContainer from './components/Profile/ProfileContainer.js';
import UsersContainer from './components/Users/UsersContainer.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';
import LoginContainer from './components/Login/LoginContainer.js';
import {BrowserRouter, Route} from 'react-router-dom';
import {initializeApp} from './redux/Reducers/AppReducer.js';
import store from './redux/reduxStore.js';
import {Provider} from 'react-redux';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.js'))
const Dialogs = React.lazy( () => import('./components/Dialogs/Dialogs.js'))

class App extends React.Component {

  catchAllUnhanandledErrors = (promiseRejectionEvent) => {
        alert('An error with request to server')
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandlerejection', this.catchAllUnhanandledErrors)
  };

  componentWillUnmount() {
    window.removeEventListener('unhandlerejection', this.catchAllUnhanandledErrors)
  }

  render() {
    if (!this.props.initialized) 
      return <Preloader />
    else {
          return <BrowserRouter>
      <div className='app-wrapper'>
      <Suspense fallback={<div>LOADING....</div>}>
        <HeaderContainer />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
          <Route exact path='/' render={() => <ProfileContainer />}/>
          <Route path='/dialogs' render={() => <Dialogs />}/>
          <Route path='/login' render={() => <LoginContainer />}/>
          <Route path='/users' render={() => <UsersContainer />}/>
          <Route path='/news' render={() => <News />}/>
          <Route path='/music' render={() => <Music />}/>
          <Route path='/settings' render={() => <Settings />}/>
        </div>
      </Suspense>
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