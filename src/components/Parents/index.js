import React from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';
import styles from './styles';

export default function Parents(props) {
    return (
        <View style={styles.container}>
            <Text>Parents</Text>
            <View style={styles.thumbnails}>
                <Image style={styles.thumbnail} source={{uri: props.parents[0].avatar.url}} />
                {props.parents[1] && <Image style={styles.thumbnail} source={{uri: props.parents[1].avatar.url}} /> }
            </View>
        </View>
    );
}
