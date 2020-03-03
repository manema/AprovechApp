import { StyleSheet } from 'react-native';
import { GREY, BLACK } from 'constants/style';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  modal: { 
    position: 'absolute',
    top: 250,
    left: 80,
    right: 0,
    bottom: 0,
    height: '50%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: BLACK,
    borderWidth: 1,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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