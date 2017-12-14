import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import styles from './styles';
import Localization from '../../services/Localization';

export default function NoDataView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.warningPane}>
                <View style={styles.filler} />
                <Text style={styles.warning}>{Localization.getString('NoDataFile')}</Text>
            </View>
            <View style={styles.instructions}>
                <View style={styles.command}>
                    <Text>{Localization.getString('ClickPrompt')}</Text>
                    <TouchableOpacity onPress={props.openSettings} style={styles.button}>
                        <Image source={require('../../../images/settings_icon.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.details}>
                    <View style={styles.sideFiller} />
                    <Text style={styles.extraInfo}>{Localization.getString('DownloadDataExplanation')}</Text>
                    <View style={styles.sideFiller} />
                </View>
                <View style={styles.bottomFiller} />
            </View>
        </View>
    );
}