import React from 'react';
import {
  Dimensions,
  View,
  Text
} from 'react-native';
import styles from './styles';
import ClickableAvatar from '../ClickableAvatar';
import Localization from '../../services/Localization';

export default function UnscrollablePeopleList(props) {
    return (
        <View style={[styles.container, props.style]}>
            {props.list && <Text style={styles.text}>{props.title}</Text>}
            <View style={styles.list}>
                {props.list.map((child, index) => {
                    if (child) {
                        return (<ClickableAvatar
                                    key={index}
                                    width={props.photoWidth}
                                    height={1.3*props.photoWidth}
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