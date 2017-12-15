import React from 'react';
import {
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PersonScreen from './screens/PersonScreen';
import SettingsScreen from './screens/SettingsScreen';
import GalleryScreen from './screens/GalleryScreen';
import SearchScreen from './screens/SearchScreen';
import QuizScreen from './screens/QuizScreen';
import PersonStore from './store/PersonStore';
import Localization from './services/Localization';
import { STORAGE_DATA_KEY, STORAGE_LANGUAGE_SELECTION_KEY } from './common/Storage';

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

const App = StackNavigator({
  Home: { screen: PersonScreen },
  Settings: { screen: SettingsScreen },
  Gallery: { screen: GalleryScreen },
  Search: { screen: SearchScreen },
  Quiz: { screen: QuizScreen }
});

export default App;

