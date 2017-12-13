import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import PersonStore from '../store/PersonStore';

class GalleryScreen extends Component {
    static navigationOptions = {
        title: 'Gallery',
        headerStyle: {
            marginTop: 10
        }
    };

  render() {
    return <Gallery store={PersonStore} navigation={this.props.navigation} />;
  }
}

export default GalleryScreen;