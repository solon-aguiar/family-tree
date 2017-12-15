import {
    StyleSheet
} from 'react-native';
import Colors from '../../common/Colors';

export default styles = StyleSheet.create({
    modal: {
        backgroundColor: Colors.MODAL_BACKGROUND,
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    modalText: {
        textAlign: 'justify',
        fontSize: 22
    },
    modalInfo: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalButtons: {
        flex: 1,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    modalButton: {
        flex: 1,
        alignItems: 'center'
    },
    modalButtonText: {
        fontSize: 17,
        color: Colors.BUTTON_BLUE
    },
    currentResultsContainer: {
        padding: 5,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    currentResultsText: {
        fontSize: 15
    },
    questionContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10
    },
    questionOptions: {
        marginTop: 15,
        flexDirection: 'row',
    },
    questionOption: {
        flex: 1,
    },
    questionResponseOption: {
        textAlign: 'center',
        fontSize: 20
    },
    questionOutcomeContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    questionOutcomeText: {
        fontSize: 20
    },
    questionHeader: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5
    },
    questionOutcomeButton: {
        marginTop: 20
    },
    questionOutcomeNext: {
        fontSize: 20,
        color: Colors.BUTTON_BLUE
    },
    finalResultsContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.MODAL_BACKGROUND
    },
    finalResultsText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    finalResultsTextContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    finalResultsButtonContainer: {
        flex: 1
    },
    finalResultButtonText: {
        fontSize: 25,
        color: Colors.BUTTON_BLUE
    }
});