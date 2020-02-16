import { StyleSheet } from 'react-native';
import { RED, WHITE } from 'constants/style';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    display: 'flex',
    height: 150,
    width: '100%',
    marginLeft: 20
  },
  image: { 
    width: 100,
    height: 100,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 
  },
  text: {
    marginLeft: 10,
    fontWeight: 'bold'
  }
});

export default styles;
