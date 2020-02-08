import { StyleSheet } from 'react-native';
import { RED, WHITE } from 'constants/style';

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    width: '100%',
    zIndex: 999
  },
  content: {
    minHeight: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default styles;
