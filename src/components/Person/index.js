import React, { Component } from 'react';
import {
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
                <View style={styles.imageContainer}>
                     <Image
                          style={[{width: props.width, height: 1.3*props.width}, styles.avatarModal]}
                          source={{uri: props.avatar.url}}
                     />
                </View>
                <View style={styles.modalInfoContainer}>
                    <Text style={styles.personDetailsData}>{props.name}</Text>
                    <Text style={styles.personDetailsData}>{`Nicknamed: ${props.short_name}`}</Text>
                    {props.placeOfBirth && <Text style={styles.personDetailsData}>{`Place of birth: ${props.place_of_birth}`}</Text>}
                    {props.livesIn && <Text style={styles.personDetailsData}>{`Currently lives in: ${props.lives_in}`}</Text>}
                    {props.languages && <Text style={styles.personDetailsData}>{`Speaks: ${props.speaks.join(',')}`}</Text>}
                </View>

            </View>
        </View>
    );
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
                          {parents && <Parents parents={parents} onPress={this.props.displayPerson} />}
                          {partner && <Partner {...partner} onPress={this.props.displayPerson} />}
                      </View>
                      {offspring && <Offspring offspring={offspring} onPress={this.props.displayPerson} />}
                  </View>

                <Modal
                  animationType={"slide"}
                  transparent={true}
                  visible={this.state.showingPersonDetails}
                >
                  <PersonDetails {...selectedPerson} close={this.toggleShowingPersonDetails} width={width} />
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