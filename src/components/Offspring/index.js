import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './styles';

function Child(props) {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.name)}>
      <Image style={styles.childAvatar} source={{uri: props.avatar.url}} />
    </TouchableOpacity>
  );
}

export default function Offspring(props) {
  if (!props.offspring) {
    return null;
  }
  return (
    <ScrollView horizontal={true} style={styles.list}>
      {props.offspring.map((child, index) => <Child {...child} onPress={props.onPress} key={index} />)}
    </ScrollView>
  );
}