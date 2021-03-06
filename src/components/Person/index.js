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
import UnscrollablePeopleList from '../UnscrollablePeopleList';
import NoDataView from '../NoDataView';
import {observer} from 'mobx-react';
import ClickableAvatar from '../ClickableAvatar';
import Localization from '../../services/Localization';

function PersonDetails(props) {
    return (
        <View style={styles.modalContainer}>
            <TouchableOpacity onPress={props.close} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>{Localization.getString('Close')}</Text>
            </TouchableOpacity>
            <ScrollView style={styles.personDetailsContainer}>
                <View style={styles.imageContainer}>
                     <Image
                          style={[{width: props.width, height: 1.2*props.width}, styles.avatarModal]}
                          source={{uri: props.avatar.url}}
                     />
                </View>
                <View style={styles.modalInfoContainer}>
                    <Text style={styles.personDetailsData}>{props.name}</Text>
                    <Text style={styles.personDetailsData}>{`${Localization.getString("Nickname")}: ${props.shortName}`}</Text>
                    {props.placeOfBirth && <Text style={styles.personDetailsData}>{`${Localization.getString("Birthplace")}: ${props.placeOfBirth}`}</Text>}
                    {props.livesIn && <Text style={styles.personDetailsData}>{`${Localization.getString("LivesIn")}: ${props.livesIn}`}</Text>}
                    {props.languages && <Text style={styles.personDetailsData}>{`${Localization.getString("Speaks")}: ${props.languages.map((language) => Localization.getString(language)).join(', ')}`}</Text>}
                </View>
            </ScrollView>
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
                          <Text style={styles.name}>{selectedPerson.name}</Text>
                      </View>
                      <View style={styles.relationships}>
                          {parents &&
                              <UnscrollablePeopleList
                                  list={parents}
                                  onPress={this.props.displayPerson}
                                  photoWidth={width/4.5}
                                  title={Localization.getString('Parents')}
                              />
                          }
                          {partner &&
                               <UnscrollablePeopleList
                                   list={[partner]}
                                   onPress={this.props.displayPerson}
                                   photoWidth={width/4.5}
                                   title={Localization.getString('Partner')}
                                   style={{alignItems:'flex-end'}}
                               />
                          }
                      </View>
                      {offspring &&
                          <UnscrollablePeopleList
                              photoWidth={(width - 20)/6}
                              list={offspring}
                              onPress={this.props.displayPerson}
                              title={Localization.getString('Offspring')}
                          />
                      }
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