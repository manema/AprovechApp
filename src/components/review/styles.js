import { StyleSheet } from 'react-native';
import { RED, WHITE, YELLOW_3 } from 'constants/style';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: { 
    alignSelf: 'center',
    color: YELLOW_3,
  },
  starsContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row'
  }
});

export default styles;
