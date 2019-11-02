  
import { StyleSheet } from 'react-native';
import { BLACK, GREY } from 'constants/style';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  input: {
    borderBottomColor: GREY,
    borderBottomWidth: 2,
    color: BLACK,
    fontSize: 20,
    height: 50,
  },
  button: {
    alignSelf: 'center',
    borderColor: 'lightblue',
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default styles;