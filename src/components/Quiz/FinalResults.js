import React, { Component } from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import styles from './styles';
import Localization from '../../services/Localization';

class FinalResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingModal: true
        };
    }

    closeModal = () => {
        this.setState({showingModal: false});
        this.props.endGame();
    }

    render() {
        const percentage = Math.floor(this.props.correctAnswers/this.props.total * 100);
        return (
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.showingModal}
            >
                <View style={styles.finalResultsContainer}>
                    <View style={styles.finalResultsTextContainer}>
                        <Text style={styles.finalResultsText}>{Localization.getString('QuizDone')}</Text>
                        <Text style={styles.finalResultsText}>{`${percentage}% ${Localization.getString('QuizPercentage')}`}</Text>
                        {percentage <= 25 && <Text style={styles.finalResultsText}>{Localization.getString('QuizPoorPerformance')}</Text>}
                        {percentage >= 26 && percentage < 50 && <Text style={styles.finalResultsText}>{Localization.getString('QuizBadPerformance')}</Text>}
                        {percentage >= 51 && percentage < 75 && <Text style={styles.finalResultsText}>{Localization.getString('QuizGoodPerformance')}</Text>}
                        {percentage >= 75 && <Text style={styles.finalResultsText}>{Localization.getString('QuizBestPerformance')}</Text>}
                    </View>
                    <View style={styles.finalResultsButtonContainer}>
                        <TouchableOpacity onPress={this.closeModal}>
                            <Text style={styles.finalResultButtonText}>{Localization.getString('QuizDoneButton')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
         );
    }
}

export default FinalResults;
