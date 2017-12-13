import React from 'react';
import {
    Image,
    TouchableOpacity
} from 'react-native';

export default function ClickableAvatar(props) {
      return (
          <TouchableOpacity onPress={props.onClick}>
              <Image style={[{width: props.width, height: props.height}, props.style]} source={{uri: props.imageUrl}} />
          </TouchableOpacity>
      );
}