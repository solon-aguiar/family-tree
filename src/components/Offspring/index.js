import React from 'react';
import {
  Dimensions,
  View,
  Text
} from 'react-native';
import styles from './styles';
import ClickableAvatar from '../ClickableAvatar';
import Localization from '../../services/Localization';

export default function Offspring(props) {
    const {width} = Dimensions.get('window');
    const photoWidth = (width - 20)/6;

    return (
        <View style={styles.container}>
            {props.offspring && <Text style={styles.text}>{Localization.getString('Offspring')}</Text>}
            <View style={styles.list}>
                {props.offspring.map((child, index) => {
                    if (child) {
                        return (<ClickableAvatar
                                    key={index}
                                    width={photoWidth}
                                    height={1.3*photoWidth}
                                    imageUrl={child.avatar.url}
                                    style={styles.photo}
                                    onClick={() => props.onPress(child.name)}
                                />
                        );

                    }
                })}
            </View>
        </View>
    );
}