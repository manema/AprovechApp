import { StyleSheet } from 'react-native';
import { RED, WHITE } from 'constants/style';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: RED,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    height: 70,
    marginHorizontal: 10,
    marginVertical: 7,
    width: 70,
  },
  name: {
    textAlign: 'center',
    color: WHITE,
    fontSize: 10
  }
});

export default styles;
