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
    return (
      <View>
      <TouchableOpacity onPress={() => props.onSelectPartner(props.name)}>
        <Text>Significant Other</Text>
        <View style={styles.container}>
          <Image
            style={styles.avatar}
            source={{uri: props.avatar.url}}
          />
          <Text style={styles.name}>{props.short_name}</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
}