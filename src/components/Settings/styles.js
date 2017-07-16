import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1
  },
  updateDataBtn: {
    alignItems: 'center'
  },
  text: {
    fontSize: 25
  },
  modal: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textInput: {
    borderColor: 'gray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 100,
    height: 40
  },
  submitBtn: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center'
  }
});