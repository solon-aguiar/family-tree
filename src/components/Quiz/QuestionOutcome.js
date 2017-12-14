import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import styles from './styles';
import Localization from '../../services/Localization';

export default function QuestionOutcome(props) {
    return (
        <View>
            {props.answeredCorrectly && <Text>{Localization.getString('QuizCorrectAnswer')}</Text>}
            {!props.answeredCorrectly && <Text>{Localization.getString('QuizWrongAnswer')}</Text>}
            <TouchableOpacity onPress={props.goToNext}>
                <Text>{Localization.getString('QuizNextQuestion')}</Text>
            </TouchableOpacity>
        </View>
    );
};