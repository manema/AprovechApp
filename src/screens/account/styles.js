import { StyleSheet } from 'react-native';
import { GREY } from 'constants/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingButtons: {
    borderBottomColor: GREY,
    borderBottomWidth: 2,
    marginBottom: 4
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
  },
  mainSeparator: {
    borderWidth: 2.5,
    borderColor: GREY,
    width: '100%'
  },
  topSideContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems : 'center',
    height: '30%',
    width: '100%'
  },
  settingChildren: {
    marginBottom: 10
  },
  settingTitle: {
    fontWeight: 'bold'
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 5
  }
});

export default styles;