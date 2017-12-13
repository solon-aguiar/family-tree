import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column'
  },
  thumbnail: {
      height: 90,
      width: 70,
      marginRight: 5
  },
  thumbnails: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start'
  }
});
