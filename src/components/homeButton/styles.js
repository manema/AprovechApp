import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  contentContainer: { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    width: 150
  },
  icon: {
    paddingLeft: 15,
    marginRight: '5%'
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default styles;
