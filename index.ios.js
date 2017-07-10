/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PersonScreen from './src/screens/PersonScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const FamilyTreeApp = StackNavigator({
  Home: { screen: PersonScreen },
  Settings: { screen: SettingsScreen },
});

AppRegistry.registerComponent('FamilyTree', () => FamilyTreeApp);
