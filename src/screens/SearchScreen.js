import React, { Component } from 'react';
import Search from '../components/Search';
import PersonStore from '../store/PersonStore';

class SearchScreen extends Component {
   static navigationOptions = {
    title: 'Search',
    headerStyle: {
        marginTop: 10
    }
  };

  render() {
    return <Search store={PersonStore} navigation={this.props.navigation} />;
  }
}

export default SearchScreen;