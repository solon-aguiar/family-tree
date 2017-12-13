import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import styles from './styles';
import Offspring from '../Offspring';
import Partner from '../Partner';
import Parents from '../Parents';
import NoDataView from '../NoDataView';
import {observer} from 'mobx-react';
import ClickableAvatar from '../ClickableAvatar';

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
            source={{uri: props.avatar.url}}
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
    const { selectedPerson, partner, offspring, parents } = this.props.store;
    const { width } = Dimensions.get('window');

    if (selectedPerson) {
        return (
          <ScrollView>
              <View style={styles.container}>
                  <ClickableAvatar
                      onClick={this.toggleShowingPersonDetails}
                      width={width}
                      height={0.8*width}
                      style={styles.selfImage}
                      imageUrl={selectedPerson.avatar.url}
                  />

                  <View style={styles.information}>
                      <View style={styles.nameContainer}>
                          <Text style={styles.name}>{selectedPerson.short_name}</Text>
                      </View>
                      <View style={styles.relationships}>
                          {parents && <Parents parents={parents} onSelectParent={this.props.onSelectPartner} />}
                          {partner && <Partner {...partner} onSelectPartner={this.props.onSelectPartner} />}
                      </View>
                      {offspring && <Offspring offspring={offspring} onPress={this.props.onSelectPartner} />}
                  </View>

                <Modal
                  animationType={"slide"}
                  transparent={true}
                  visible={this.state.showingPersonDetails}
                >
                  <PersonDetails {...selectedPerson} close={this.toggleShowingPersonDetails} />
                </Modal>
              </View>
          </ScrollView>
        );
    } else {
        return <NoDataView openSettings={this.props.openSettings} />;
    }
  }
}

export default Person;