import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import ClickableAvatar from './ClickableAvatar';
import Localization from '../services/Localization';

export default function Partner(props) {
    const photoWidth = 80;
    return (
        <View>
            <Text>{Localization.getString('Partner')}</Text>
            <ClickableAvatar
                onClick={() => props.onPress(props.name)}
                width={photoWidth}
                height={1.3*photoWidth}
                imageUrl={props.avatar.url}
                style={{marginTop: 5}}
            />
        </View>
    );
}