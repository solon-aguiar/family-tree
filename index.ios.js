/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import PersonContainer from './src/containers/PersonContainer';

export default class FamilyTree extends Component {
  render() {
    return <PersonContainer />;
  }
}

AppRegistry.registerComponent('FamilyTree', () => FamilyTree);
