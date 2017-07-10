import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Person from '../components/Person';
import PersonStore from '../store/PersonStore';

class PersonContainer extends Component {
  onSelectPartner = (name) => PersonStore.selectPerson(name);

  render() {
    return <Person store={PersonStore} onSelectPartner={this.onSelectPartner}/>;
  }
}

export default PersonContainer;