import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Settings from '../components/Settings';
import Localization from '../services/Localization';
import PersonStore from '../store/PersonStore';

class SettingsScreen extends Component {
   static navigationOptions = {
    title: 'Settings',
  };

  updateData = (token) => {
    fetch('solon', {
        headers: {
          'api-token': token
        }
      }
    ).then((response) => response.json()
    ).then((responseJson) => PersonStore.people = responseJson);
  }

  render() {
    return <Settings localization={Localization} updateData={this.updateData} />;
  }
}

export default SettingsScreen;