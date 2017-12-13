/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PersonScreen from './src/screens/PersonScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PersonStore from './src/store/PersonStore';

const FamilyTreeApp = StackNavigator({
  Home: { screen: PersonScreen },
  Settings: { screen: SettingsScreen },
});

AsyncStorage.getItem('peopleData').then((data) => {
   PersonStore.updatePeople(JSON.parse(data));
});

AppRegistry.registerComponent('FamilyTree', () => FamilyTreeApp);


