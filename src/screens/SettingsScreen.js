import React, { Component } from 'react';
import Settings from '../components/Settings';
import Localization from '../services/Localization';
import { NavigationActions } from 'react-navigation';

class SettingsScreen extends Component {
   static navigationOptions = {
       title: 'Settings',
       headerStyle: {
           marginTop: 10
       }
  };

  navigateToHome() {
      const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
              NavigationActions.navigate({ routeName: 'Home'})
          ]
      });
      this.props.navigation.dispatch(resetAction);
  }

  render() {
    return <Settings navigation={this.props.navigation} navigateToHome={() => this.navigateToHome()} />;
  }
}

export default SettingsScreen;