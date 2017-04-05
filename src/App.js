import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBET8U0TQP05EVk5kRWs01qHFg_e0P0sKU",
      authDomain: "manager-a3167.firebaseapp.com",
      databaseURL: "https://manager-a3167.firebaseio.com",
      projectId: "manager-a3167",
      storageBucket: "manager-a3167.appspot.com",
      messagingSenderId: "1073589556268"
  };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
