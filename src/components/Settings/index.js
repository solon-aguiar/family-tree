import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  Text,
  Picker,
  Modal,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import {observer} from 'mobx-react';
import * as SettingsActions from '../../actions/SettingsActions';

@observer
class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingModal: false,
      loading: false,
      token: 'type text'
    }
  }

  toggleModal = (showingModal) => {
      this.setState({showingModal, loading: false})
  }

  loadData = () => {
      if (!!!this.state.loading) {
            this.setState({loading: true})
            SettingsActions.updateData(this.props.navigation, this.state.token, () => this.toggleModal(false));
      }
  }

  back = () => {
      if (!!!this.state.loading) {
             this.toggleModal(false);
      }
  }

  render() {
      console.log('state', this.state);
      return (
        <View style={styles.container}>
          <View style={styles.languagePicker}>
            <Picker
              selectedValue={this.props.localization.currentLanguage}
              onValueChange={(itemValue) => this.props.localization.currentLanguage = itemValue}
            >
              {this.props.localization.getAvailableLanguages().map((lang) => <Picker.Item label={lang.language_name} value={lang.language_code} key={lang.language_code}/>)}
            </Picker>
          </View>
          <View style={styles.updateDataBtn}>
            <TouchableOpacity onPress={() => this.toggleModal(true)}>
              <Text style={styles.text}>Update data file</Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.showingModal}
          >
            <View style={styles.modal}>
              <TextInput
                onChangeText={(token) => this.setState({token})}
                value={this.state.token}
                style={styles.textInput}
                autoCapitalize={'none'}
              />
              <View style={styles.buttonsPanel}>
                  <TouchableOpacity onPress={() => this.loadData()} style={styles.btn}>
                    <Text style={styles.text}>Done!</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.back()} style={styles.btn}>
                    <Text style={styles.text}>Back</Text>
                  </TouchableOpacity>
              </View>
              <ActivityIndicator size="large" color="#0000ff" animating={this.state.loading} />
            </View>
          </Modal>
        </View>
      );
  }
}

export default Settings;