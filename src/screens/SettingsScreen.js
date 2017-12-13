import React, { Component } from 'react';
import Settings from '../components/Settings';
import Localization from '../services/Localization';

class SettingsScreen extends Component {
   static navigationOptions = {
       title: 'Settings',
       headerStyle: {
           marginTop: 10
       }
  };

  render() {
    return <Settings localization={Localization} navigation={this.props.navigation} />;
  }
}

export default SettingsScreen;