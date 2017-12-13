import React, { Component } from 'react';
import Search from '../components/Search';
import PersonStore from '../store/PersonStore';
import { NavigationActions } from 'react-navigation';

class SearchScreen extends Component {
    static navigationOptions = {
        title: 'Search',
        headerStyle: {
            marginTop: 10
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