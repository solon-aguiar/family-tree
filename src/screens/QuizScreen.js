import React, { Component } from 'react';
import Quiz from '../components/Quiz';
import PersonStore from '../store/PersonStore';
import { NavigationActions } from 'react-navigation';
import Localization from '../services/Localization';
import Colors from '../common/Colors';

class QuizScreen extends Component {
    static navigationOptions = {
        title: Localization.getString('QuizScreen')
    };

    navigateToHome = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'})
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return <Quiz store={PersonStore} endGame={this.navigateToHome} />;
    }
}

export default QuizScreen;