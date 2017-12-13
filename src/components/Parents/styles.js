import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column'
  },
  thumbnails: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start'
  },
  photo: {
      borderWidth: 2,
      borderColor: 'white'
  }
});
