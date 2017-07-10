import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

function Toolbar(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.openGallery}>
        <Image source={require('../../../images/gallery_icon.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.startSearch}>
        <Image source={require('../../../images/search_icon.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.openSettings}>
        <Image source={require('../../../images/settings_icon.png')}/>
      </TouchableOpacity>
    </View>
  )
}

export default Toolbar;