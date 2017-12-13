import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    information: {
        margin: 10,
        flex: 1,
        flexDirection: 'column'
    },
    name: {
        fontSize: 50,
        flex: 0.1
    },
    nameAndPartner: {
        flex: 1,
        flexDirection: 'row'
    },
    offspring: {
        flex: 1,
        marginTop: 10
    },
    parents: {
        flex: 1,
        marginTop: 10
    },
  photos: {
    flex: 1
  },
  relationship: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selfImage: {
    height: 250
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
  relations: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});