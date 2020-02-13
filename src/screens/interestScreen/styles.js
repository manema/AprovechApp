import { StyleSheet } from 'react-native';
import { GREY } from 'constants/style';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  mainSeparator: {
    borderColor: GREY,
    borderWidth: 1,
    width: '95%',
    marginLeft: '2.5%'
  },
  searchInput:{
    padding: 10,
    fontSize: 18,
    borderColor: '#CCC',
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 15,
    width: '100%'
  }
});

export default styles;