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
import Localization from '../../services/Localization';

@observer
class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingModal: false,
      loading: false,
      token: '',
      showError: false
    }
  }

  toggleModal = (showingModal) => {
      this.setState({showingModal, loading: false})
  }

  updateSuccess = () => {
      this.toggleModal(false);
      this.props.navigateToHome();
  }

  loadData = () => {
      if (!!!this.state.loading) {
          this.setState({loading: true, showError: false})
          SettingsActions.updateData(this.state.token, this.updateSuccess, this.updateError);
      }
  }

  updateError = () => {
      this.setState({showingModal: true, loading: false, showError: true})
  }

  back = () => {
      if (!!!this.state.loading) {
          this.toggleModal(false);
      }
  }

  deleteData = () => {
      SettingsActions.deleteData(this.props.navigateToHome);
  }

  changeLanguage = (languageCode) => {
      SettingsActions.changeLanguage(languageCode);
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.languagePicker}>
            <Picker
              selectedValue={Localization.currentLanguage}
              onValueChange={(itemValue) => this.changeLanguage(itemValue)}
            >
              {Localization.getAvailableLanguages().map((lang) => <Picker.Item label={lang.language_name} value={lang.language_code} key={lang.language_code}/>)}
            </Picker>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => this.toggleModal(true)}>
                <Text style={styles.text}>{Localization.getString('UpdateDataFile')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.deleteData}>
                <Text style={styles.text}>{Localization.getString('DeleteDataFile')}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.filler} />

          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.showingModal}
          >
            <View style={styles.modal}>
              <TextInput
                onChangeText={(token) => this.setState({token})}
                placeholder={Localization.getString('PasswordPrompt')}
                style={styles.textInput}
                autoCapitalize={'none'}
                autoCorrect={false}
              />
              <View style={styles.buttonsPanel}>
                  <TouchableOpacity onPress={() => this.loadData()} style={styles.btn}>
                    <Text style={styles.text}>{Localization.getString('Done')}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.back()} style={styles.btn}>
                    <Text style={styles.text}>{Localization.getString('Back')}</Text>
                  </TouchableOpacity>
              </View>
              {this.state.showError && <Text style={styles.error}>{Localization.getString('ErrorUpdatingDataFile')}</Text>}
              <ActivityIndicator size="large" color="gray" animating={this.state.loading} style={styles.loadingIndicator} />
            </View>
          </Modal>
        </View>
      );
  }
}

export default Settings;