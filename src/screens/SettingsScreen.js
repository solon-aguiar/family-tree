import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Settings from '../components/Settings';
import Localization from '../services/Localization';
import PersonStore from '../store/PersonStore';
import { NavigationActions } from 'react-navigation';

class SettingsScreen extends Component {
   static navigationOptions = {
    title: 'Settings',
  };

  updateData = (token, callback) => {
    fetch('https://family-tree-server.herokuapp.com/', {
        headers: {
          'api_token': token
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      PersonStore.updatePeople(responseJson);
      
      callback();
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home'})
        ]
      });
      this.props.navigation.dispatch(resetAction);
    });
  }

  render() {
    return <Settings localization={Localization} updateData={this.updateData} />;
  }
}

export default SettingsScreen;