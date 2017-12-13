import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import styles from './styles';

export default function Parents(props) {
    return (
        <View style={styles.container}>
            <Text>Parents</Text>
            <View style={styles.thumbnails}>
                <TouchableOpacity onPress={() => props.onSelectParent(props.parents[0].name)}>
                    <Image style={styles.thumbnail} source={{uri: props.parents[0].avatar.url}} />
                </TouchableOpacity>
                {props.parents[1] &&
                    <TouchableOpacity onPress={() => props.onSelectParent(props.parents[1].name)}>
                        <Image style={styles.thumbnail} source={{uri: props.parents[1].avatar.url}} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}
