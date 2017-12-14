import {
  StyleSheet
} from 'react-native';
import Colors from '../../common/Colors';

export default styles = StyleSheet.create({
  scrollContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
  },
  photo: {
      borderWidth: 1,
      borderColor: Colors.MODAL_BACKGROUND
  }
});