import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styles from './styles';
import Offspring from '../Offspring';
import Partner from '../Partner';
import {observer} from 'mobx-react';

@observer
class Person extends Component {
  render() {
    const { selectedPerson, partner } = this.props.store;

    return (
      <View style={styles.container}>
        <Text style={styles.name}>{selectedPerson.short_name}</Text>

        <View style={styles.photos}>
          <View style={styles.relationship}>
            <Image
              style={styles.selfImage}
              source={{uri: selectedPerson.avatar}}
            />
            <Partner {...partner} onSelectPartner={this.props.onSelectPartner} />
          </View>

          <View style={styles.offspring}>
            <Offspring offspring={this.props.offspring} />
          </View>

        </View>
      </View>
    );
  }
}

export default Person;