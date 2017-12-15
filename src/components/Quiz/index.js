import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './styles';
import { shuffle } from '../../common/Random';
import QuizModal from './QuizModal';
import FinalResults from './FinalResults';
import CurrentResults from './CurrentResults';
import Question from './Question';
import QuestionOutcome from './QuestionOutcome';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingModal: true,
            isAnsweringQuestion: true,
            answeredCorrectly: false,
            currentPersonIndex: - 1,
            correctAnswers: 0,
            people: shuffle(Object.values(this.props.store.people))
        };
    }

    start = () => {
        this.setState({
            showingModal: false
        });
        this.nextQuestion();
    }

    recordAnswer = (answer) => {
        console.log("AQUI COM", this.state);
        if (this.state.people[this.state.currentPersonIndex].name === answer) {
            this.setState({
                isAnsweringQuestion: false,
                answeredCorrectly: true,
                correctAnswers: this.state.correctAnswers + 1
            });
        } else {
            this.setState({
                isAnsweringQuestion: false,
                answeredCorrectly: false
            });
        }
    }

    nextQuestion = () => {
         this.setState({
             isAnsweringQuestion: true,
             currentPersonIndex: this.state.currentPersonIndex + 1
         });
    }

    render() {
        const totalPeople = this.state.people.length;
        const isDone = this.state.currentPersonIndex === totalPeople;
        return (
            <View>
                {this.state.showingModal && <QuizModal back={this.props.endGame} start={this.start} />}
                {!this.state.showingModal && isDone && <FinalResults endGame={this.props.endGame} correctAnswers={this.state.correctAnswers} total={totalPeople} />}
                {!this.state.showingModal && !isDone && <CurrentResults total={totalPeople} corrects={this.state.correctAnswers} toGo={totalPeople - this.state.currentPersonIndex - 1} />}
                {!this.state.showingModal && !isDone && <Question people={this.state.people} current={this.state.currentPersonIndex} recordAnswer={this.recordAnswer} /> }
                {!this.state.showingModal && !this.state.isAnsweringQuestion && <QuestionOutcome answeredCorrectly={this.state.answeredCorrectly} goToNext={this.nextQuestion} />}
            </View>
        );
    }
}

export default Quiz;