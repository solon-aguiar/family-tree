import React, { Component } from 'react';
import {
    TextInput,
    View
} from 'react-native';
import styles from './styles';
import Gallery from '../Gallery';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={(query) => this.setState({query})}
                    value={this.state.query}
                    autoCapitalize={'none'}
                    style={styles.textInput}
                    placeholder={"Type the person's name here"}
                    autoCorrect={false}
                />
                <Gallery
                    store={this.props.store}
                    query={this.state.query}
                    onClick={this.props.onClick}
                />
            </View>
        );
    }
}

export default Search;