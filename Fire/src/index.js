import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import { CONFIG_KEYS } from './firebase-config';
import LoginForm from './components/LoginForm';

class Fire extends Component {
  componentWillMount() {
    firebase.initializeApp({ CONFIG_KEYS });
  }

  render() {
    return (
      <View>
        <Header headerText='Fire Auth' />
        <LoginForm />
      </View>
    );
  }
}

AppRegistry.registerComponent('Fire', () => Fire);
