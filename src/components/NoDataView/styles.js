import {
    StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    command: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    instructions: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
    },
    warningPane: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    button: {
        marginLeft: 10
    },
    filler: {
        flex: 1
    },
    bottomFiller: {
        flex: 1
    },
    sideFiller: {
        flex: 0.25
    },
    extraInfo: {
        flex: 0.5,
        textAlign: 'center'
    },
    details: {
        flexDirection: 'row'
    },

});