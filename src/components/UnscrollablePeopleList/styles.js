import {
  StyleSheet
} from 'react-native';
import Colors from '../../common/Colors';

export default styles = StyleSheet.create({
  list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 5
  },
  photo: {
      borderWidth: 1,
      borderColor: Colors.MODAL_BACKGROUND
  },
  container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 10
  },
  text: {
      marginTop: 10,
      fontSize: 18
  }
});