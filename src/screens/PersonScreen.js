import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Person from '../components/Person';
import Toolbar from '../components/Toolbar';
import PersonStore from '../store/PersonStore';
import Localization from '../services/Localization';
import Colors from '../common/Colors';

class PersonScreen extends Component {
    static navigationOptions = {
        title: Localization.getString('PersonScreen')
    };

  displayPerson = (name) => PersonStore.selectPerson(name);
  navigateToSettings = () => this.props.navigation.navigate('Settings');
  openGallery = () => this.props.navigation.navigate('Gallery');
  startSearch = () => this.props.navigation.navigate('Search');
  startQuiz = () => this.props.navigation.navigate('Quiz');

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
            startSearch={this.startSearch}
            startQuiz={this.startQuiz}
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