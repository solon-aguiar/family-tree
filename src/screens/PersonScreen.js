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

  onSelectPartner = (name) => PersonStore.selectPerson(name);
  navigateToSettings = () => this.props.navigation.navigate('Settings');

  render() {
    return (
      <View style={styles.container}>
        <Person store={PersonStore} onSelectPartner={this.onSelectPartner} style={styles.personDetails} />
        <Toolbar openSettings={this.navigateToSettings} style={styles.toolbar} />
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