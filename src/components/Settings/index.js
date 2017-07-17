import React, { Component } from 'react';
import {
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

@observer
class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingModal: false,
      token: 'type text'
    }
  }

  toggleModal = (showingModal) => this.setState({showingModal})

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
                value={this.state.token}
                style={styles.textInput}
                autoCapitalize={'none'}
              />
              <TouchableOpacity onPress={() => this.props.updateData(this.state.token, () => this.toggleModal(false))} style={styles.submitBtn}>
                <Text style={styles.text}>Done!</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      );
  }
}

export default Settings;