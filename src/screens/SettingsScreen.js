import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class SettingsScreen extends Component {
   static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return <Text>Settings</Text>;
  }
}

export default SettingsScreen;