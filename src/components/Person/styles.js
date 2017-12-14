import {
  StyleSheet
} from 'react-native';
import Colors from '../../common/Colors';

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
        borderBottomColor: Colors.TEXT_INPUT_BORDER
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
        paddingVertical: 30,
        flex: 1,
        backgroundColor: Colors.MODAL_BACKGROUND,
    },
    closeButton: {
        margin: 5,
        alignItems: 'flex-start'
    },
    avatarModal: {
        borderWidth: 2,
        borderColor: 'black'
    },
    personDetailsContainer: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'column'
    },
    modalInfoContainer: {
        alignItems: 'center'
    },
    closeButtonText: {
        fontSize: 25,
        color: Colors.BUTTON_BLUE
    },
    relationships: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    personDetailsData: {
        fontSize: 20,
        marginBottom: 5
    },
});