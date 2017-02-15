import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import firebase from 'firebase';

import { Button, CardSection, Header, Spinner } from './components/common';
import { CONFIG_KEYS } from './firebase-config';
import LoginForm from './components/LoginForm';

class Fire extends Component {
  state = { loggedIn: '' };

  componentWillMount() {
    firebase.initializeApp(CONFIG_KEYS);

    firebase.auth().onAuthStateChanged((user) => {
      console.log('auth changed', user);
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
      console.log('state', this.state);
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText='Fire Auth' />
        {this.renderContent()}
      </View>
    );
  }
}

AppRegistry.registerComponent('Fire', () => Fire);
