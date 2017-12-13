import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import ClickableAvatar from './ClickableAvatar';

export default function Partner(props) {
    const photoWidth = 80;
    return (
        <View>
            <Text>Significant Other</Text>
            <ClickableAvatar
                onClick={() => props.onSelectPartner(props.name)}
                width={photoWidth}
                height={1.3*photoWidth}
                imageUrl={props.avatar.url}
                style={{marginTop: 5}}
            />
        </View>
    );
}