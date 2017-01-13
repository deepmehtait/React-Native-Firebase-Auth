import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Fire extends Component {
  render() {
    return (
      <View>
        <Text>
          Fire Auth.!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Fire', () => Fire);
