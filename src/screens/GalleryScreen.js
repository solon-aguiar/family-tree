import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import PersonStore from '../store/PersonStore';
import { NavigationActions } from 'react-navigation';
import Localization from '../services/Localization';
import Colors from '../common/Colors';

class GalleryScreen extends Component {
    static navigationOptions = {
        title: Localization.getString('Gallery'),
        headerStyle: {
            marginTop: 10,
            backgroundColor: Colors.MODAL_BACKGROUND
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
        return <Gallery store={PersonStore} navigation={this.props.navigation} onClick={(name) => this.onClick(name)} />;
    }
}

export default GalleryScreen;