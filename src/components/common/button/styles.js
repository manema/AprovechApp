import { StyleSheet } from 'react-native';
import { RED, WHITE } from 'constants/style';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: RED,
    width: 250,
    height: 60
  },
  text: {
    alignSelf: 'center',
    color: WHITE,
    fontSize: 26
  },
  btnSecondary: {
    backgroundColor: 'transparent'
  },
  textSecondary: {
    color: RED,
  }
});

export default styles;