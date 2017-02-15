import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    error: '',
    loading: false,
    password: '',
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginError.bind(this));
    });
  }

onLoginError(err) {
  console.log('err', err);
  this.setState({
    error: `Authentication Failed-${err.message}`,
    loading: false,
    password: '',
  });
}

onLoginSuccess() {
  this.setState({
    email: '',
    error: '',
    loading: false,
    password: ''
  });
}
  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  render() {
    const { errorText } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            lable='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            lable='Password'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>
        <Text style={errorText}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'red',
  },
};

export default LoginForm;
