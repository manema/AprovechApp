import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: '30%',
    width: '85%'
  },
  btnContainer: {
    alignSelf: 'center'
  },
  btnResetContainer: {
    marginTop: 'auto',
    alignSelf: 'center'
  },
  inputsContainer: {
    flex: 1
  },
  submitBtn: {
    height: 40
  },
  submitBtnText: { 
    fontSize: 18
  }
});

export default styles;