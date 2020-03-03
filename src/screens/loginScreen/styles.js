import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 20
  },
  loginContainer: {
    width: '80%',
    height: '60%',
    alignSelf: 'center'
  },
  btnContainer: {
    alignSelf: 'center'
  },
  btnBack: {
    width: 20
  },
  welcomeMessageContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  welcomeMessage: {
    fontSize: 22,
    marginBottom: 20
  }
});

export default styles;