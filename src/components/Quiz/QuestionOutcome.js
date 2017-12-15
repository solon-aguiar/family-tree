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
        <View style={styles.questionOutcomeContainer}>
            {props.answeredCorrectly && <Text style={styles.questionOutcomeText}>{Localization.getString('QuizCorrectAnswer')}</Text>}
            {!props.answeredCorrectly && <Text style={styles.questionOutcomeText}>{Localization.getString('QuizWrongAnswer')}</Text>}
            <TouchableOpacity style={styles.questionOutcomeButton} onPress={props.goToNext}>
                <Text style={styles.questionOutcomeNext}>{Localization.getString('QuizNextQuestion')}</Text>
            </TouchableOpacity>
        </View>
    );
};