import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Header } from './components/common';

class Fire extends Component {
  render() {
    return (
      <View>
        <Header headerText='Fire Auth' />
        <Text>
          Fire.!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Fire', () => Fire);
