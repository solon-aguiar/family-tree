import React, { Component } from 'react';
import Search from '../components/Search';
import PersonStore from '../store/PersonStore';
import { NavigationActions } from 'react-navigation';
import Localization from '../services/Localization';

class SearchScreen extends Component {
    static navigationOptions = {
        title: Localization.getString('SearchScreen'),
        headerStyle: {
            marginTop: 10,
            backgroundColor: 'white'
        }
    };

    navigateToHome() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'})
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    onClick = (name) => {
        PersonStore.selectPerson(name);
        this.navigateToHome();
    }

    render() {
        return <Search store={PersonStore} navigation={this.props.navigation} onClick={(name) => this.onClick(name)}/>;
    }
}

export default SearchScreen;