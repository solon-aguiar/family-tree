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
        fontSize: 50
    },
    nameContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    nameAndPartner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameAndParents: {
        flex: 1,
        flexDirection: 'column'
    },
    modalContainer: {
        padding: 30,
        flex: 1,
        backgroundColor: 'white',
      },
  photos: {
    flex: 1
  },
  relationships: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
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