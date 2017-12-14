import {
    StyleSheet
} from 'react-native';
import Colors from '../../common/Colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInput: {
        marginBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: Colors.TEXT_INPUT_BORDER,
        height: 40
    }
});