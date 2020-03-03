import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signUpContainer: {
    width: '80%',
    height: '80%',
    alignSelf: 'center',
  },
  btnContainer: {
    alignSelf: 'center',
    width: 400
  },
  btnBack: {
    width: 20
  },
  welcomeMessageContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  welcomeMessage: {
    alignSelf: 'center',
    fontSize: 26,
    marginBottom: 20,
    marginTop: 10,
    fontWeight: 'bold'
  }
});

export default styles;