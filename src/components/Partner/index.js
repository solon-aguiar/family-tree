import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default function Partner(props) {
    if (!props.name) {
      return null;
    }

    return (
      <TouchableOpacity onPress={() => props.onSelectPartner(props.name)}>
        <View style={styles.container}>
          <Image
            style={styles.avatar}
            source={{uri: props.avatar}}
          />
          <Text style={styles.name}>{props.short_name}</Text>
        </View>
      </TouchableOpacity>
    );
}