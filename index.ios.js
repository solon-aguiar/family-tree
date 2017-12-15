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
import GalleryScreen from './src/screens/GalleryScreen';
import SearchScreen from './src/screens/SearchScreen';
import QuizScreen from './src/screens/QuizScreen';
import PersonStore from './src/store/PersonStore';
import Localization from './src/services/Localization';
import { STORAGE_DATA_KEY, STORAGE_LANGUAGE_SELECTION_KEY } from './src/common/Storage';

const FamilyTreeApp = StackNavigator({
  Home: { screen: PersonScreen },
  Settings: { screen: SettingsScreen },
  Gallery: { screen: GalleryScreen },
  Search: { screen: SearchScreen },
  Quiz: { screen: QuizScreen }
});

AsyncStorage.getItem(STORAGE_DATA_KEY).then((data) => {
   if (data) {
       PersonStore.updatePeople(JSON.parse(data));
   }
});

AsyncStorage.getItem(STORAGE_LANGUAGE_SELECTION_KEY).then((language) => {
   if (language) {
       Localization.currentLanguage = language;
   }
});

AppRegistry.registerComponent('FamilyTree', () => FamilyTreeApp);


