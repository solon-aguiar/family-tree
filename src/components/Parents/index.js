import React from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './styles';
import ClickableAvatar from '../ClickableAvatar';
import Localization from '../../services/Localization';

export default function Parents(props) {
    const photoWidth = 80;
    return (
        <View style={styles.container}>
            <Text>{Localization.getString('Parents')}</Text>
            <View style={styles.thumbnails}>
                {props.parents[0] && <ClickableAvatar
                    onClick={() => props.onPress(props.parents[0].name)}
                    width={photoWidth}
                    height={1.3*photoWidth}
                    imageUrl={props.parents[0].avatar.url}
                    style={styles.photo}
                />
                }
                {props.parents[1] &&
                    <ClickableAvatar
                        onClick={() => props.onPress(props.parents[1].name)}
                        width={photoWidth}
                        height={1.3*photoWidth}
                        imageUrl={props.parents[1].avatar.url}
                        style={styles.photo}
                    />
                }
            </View>
        </View>
    );
}
