import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import Offspring from '../Offspring';
import Partner from '../Partner';
import {observer} from 'mobx-react';

function PersonDetails(props) {
  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={props.close} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <View style={styles.personDetailsContainer}>
          <Text style={styles.personDetailsData}>{props.name}</Text>
          <Image
            style={styles.avatarModal}
            source={{uri: props.avatar}}
          />
          <Text style={styles.personDetailsData}>{`Called by: ${props.short_name}`}</Text>
          {props.place_of_birth && <Text style={styles.personDetailsData}>{`Place of birth: ${props.place_of_birth}`}</Text>}
          {props.lives_in && <Text style={styles.personDetailsData}>{`Currently lives in: ${props.lives_in}`}</Text>}
          {props.soccer_team && <Text style={styles.personDetailsData}>{`Favorite soccer team: ${props.soccer_team}`}</Text>}
      </View>
     </View>
  )
}

@observer
class Person extends Component {
  state = {
    showingPersonDetails: false
  };

  toggleShowingPersonDetails = () => this.setState({showingPersonDetails: !this.state.showingPersonDetails});

  render() {
    const { selectedPerson, partner, offspring } = this.props.store;

    return (
      <View style={styles.container}>
        <Text style={styles.name}>{selectedPerson.short_name}</Text>

        <View style={styles.photos}>
          <View style={styles.relationship}>
            <TouchableOpacity onPress={this.toggleShowingPersonDetails}>
              <Image
                style={styles.selfImage}
                source={{uri: selectedPerson.avatar}}
              />
            </TouchableOpacity>
            <Partner {...partner} onSelectPartner={this.props.onSelectPartner} />
          </View>

          <View style={styles.offspring}>
            <Offspring offspring={offspring} onPress={this.props.onSelectPartner} />
          </View>
        </View>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.showingPersonDetails}
        >
          <PersonDetails {...selectedPerson} close={this.toggleShowingPersonDetails} />
        </Modal>
      </View>
    );
  }
}

export default Person;