import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1
  },
  name: {
    fontSize: 50,
    alignItems: 'center',
    flex: 0.15
  },
  photos: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20
  },
  relationship: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selfImage: {
    height: 300,
    width: 150
  },
  offspring: {
    marginTop: 20
  },
  modalContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  personDetailsContainer: {
    alignItems: 'center',
  },
  closeButton: {
    margin: 5,
    alignItems: 'flex-end',
  },
  closeButtonText: {
    fontSize: 20,
  },
  avatarModal: {
    height: 400,
    width: 200,
    margin: 5
  },
  personDetailsData: {
    fontSize: 20,
    marginBottom: 5
  },
});