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
      token: 'type text',
      showError: false
    }
  }

  toggleModal = (showingModal) => {
      this.setState({showingModal, loading: false})
  }

  loadData = () => {
      if (!!!this.state.loading) {
          this.setState({loading: true, showError: false})
          SettingsActions.updateData(this.props.navigation, this.state.token, () => this.toggleModal(false), this.showError);
      }
  }

  showError = () => {
      this.setState({showingModal: true, loading: false, showError: true})
  }

  back = () => {
      if (!!!this.state.loading) {
          this.toggleModal(false);
      }
  }

  render() {
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
                placeholder={"Type the secret password here"}
                style={styles.textInput}
                autoCapitalize={'none'}
                autoCorrect={false}
              />
              <View style={styles.buttonsPanel}>
                  <TouchableOpacity onPress={() => this.loadData()} style={styles.btn}>
                    <Text style={styles.text}>Done!</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.back()} style={styles.btn}>
                    <Text style={styles.text}>Back</Text>
                  </TouchableOpacity>
              </View>
              {this.state.showError && <Text style={styles.error}>There was an error updating the data. Try again!</Text>}
              <ActivityIndicator size="large" color="gray" animating={this.state.loading} style={styles.loadingIndicator} />
            </View>
          </Modal>
        </View>
      );
  }
}

export default Settings;