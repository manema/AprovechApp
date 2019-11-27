import { StyleSheet } from 'react-native';
import { RED, WHITE } from 'constants/style';

const styles = StyleSheet.create({
  container: {
    height: '15%',
    maxHeight: 100,
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    width: '100%',
    zIndex: 999
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default styles;
