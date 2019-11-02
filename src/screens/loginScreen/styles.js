import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    width: '80%',
    height: '80%',
    alignSelf: 'center',
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