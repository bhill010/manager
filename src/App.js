import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
