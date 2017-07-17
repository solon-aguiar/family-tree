'use strict'

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './styles';

function Person(props) {
  return <Text>{props.name}</Text>;
}

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {this.props.people.map((person) => <Person {...person} /> )}
      </View>
    );
  }
}

export default Gallery;
