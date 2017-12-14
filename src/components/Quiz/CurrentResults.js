import React from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './styles';
import Localization from '../../services/Localization';

export default function CurrentResults(props) {
    return (
        <View style={styles.currentResultsContainer}>
            <Text style={styles.currentResultsText}>{`${Localization.getString('QuizCorrectQuestionsAnswered')}: ${props.corrects}`}</Text>
            <Text style={styles.currentResultsText}>{`${Localization.getString('QuizTotalQuestions')}: ${props.total}`}</Text>
            <Text style={styles.currentResultsText}>{`${Localization.getString('QuizRemainingQuestions')}: ${props.toGo}`}</Text>
        </View>
    );
};