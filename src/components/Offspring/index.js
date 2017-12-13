import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './styles';
import ClickableAvatar from '../ClickableAvatar';

export default function Offspring(props) {
    const {width} = Dimensions.get('window');
    const photoWidth = (width - 20)/6;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Offspring</Text>
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