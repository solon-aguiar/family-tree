import React, { Component } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';
import styles from './styles';
import { shuffle, random } from '../../common/Random';

class Question extends Component {
    constructor(props) {
        super(props);
        console.log("RENDERED NEW QUESTION", this.props);

        this.state = {
            answered: false
        };
    }

    recordAnswer = (selectedOption) => {
        if (!this.state.answered) {
            this.setState({
                answered: true
            });
            this.props.recordAnswer(selectedOption);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.current !== this.props.current) {
            this.setState({
                answered: false
            });
        }
    }

    findSuitableOptions = (people, correctName) => {
        let options = [correctName];
        options.push("Test 1");
        options.push("Test 2");

        return options;
    }

    getTextColorForOption = (optionName, correctAnswer) => {
        if (!this.state.answered) {
            return {};
        } else {
            if (optionName === correctAnswer) {
                return {color: 'green'};
            } else {
                return {color: 'red'};
            }
        }
    }

    render() {
        const { width } = Dimensions.get('window');
        const currentIndex = this.props.current;
        const currentPerson = this.props.people[currentIndex];
        const names = this.findSuitableOptions(this.props.people, currentPerson.name);

        console.log("names", names);

        return (
            <View style={styles.questionContainer}>
                <Image style={{width: 0.6 * width, height: 0.8* width}} source={{uri: currentPerson.avatar.url}} />
                <View style={styles.questionOptions}>
                    {names.map((value, index) => {
                        const textStyle = this.getTextColorForOption(value, currentPerson.name);
                        return (
                            <TouchableOpacity key={index} style={styles.questionOption} onPress={() => this.recordAnswer(value)}>
                                <Text style={[styles.questionResponseOption, textStyle]}>
                                    {value}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    }
};

export default Question;