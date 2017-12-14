import React, { Component } from 'react';
import {
    Modal,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import Localization from '../../services/Localization';

class QuizModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingModal: true
        };
    }

    start = () => {
        this.setState({
            showingModal: false
        });

        this.props.start();
    }

    back = () => {
        this.setState({
                showingModal: false
        });

        this.props.back();
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={this.state.showingModal}
            >
                <View style={styles.modal}>
                    <View style={styles.modalInfo}>
                        <Text style={styles.modalText}>{Localization.getString('QuizExplanation')}</Text>
                        <Text style={[styles.modalText, {marginTop: 10}]}>{Localization.getString('QuizCommand')}</Text>
                    </View>
                    <View style={styles.modalButtons}>
                        <TouchableOpacity onPress={this.start} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>{Localization.getString('Start')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.back} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>{Localization.getString('Back')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default QuizModal;