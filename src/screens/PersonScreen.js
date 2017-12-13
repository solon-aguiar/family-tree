import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Person from '../components/Person';
import Toolbar from '../components/Toolbar';
import PersonStore from '../store/PersonStore';

class PersonScreen extends Component {
  static navigationOptions = {
    title: 'Person Info',
  };

  displayPerson = (name) => PersonStore.selectPerson(name);
  navigateToSettings = () => this.props.navigation.navigate('Settings');
  openGallery = () => this.props.navigation.navigate('Gallery');

  render() {
    return (
      <View style={styles.container}>
        <Person
            store={PersonStore}
            displayPerson={this.displayPerson}
            openSettings={this.navigateToSettings}
            style={styles.personDetails}
        />
        <Toolbar
            openSettings={this.navigateToSettings}
            openGallery={this.openGallery}
            style={styles.toolbar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  personDetails: {
    flex: 1
  },
  toolbar: {
    flex: 0.1
  }
});

export default PersonScreen;