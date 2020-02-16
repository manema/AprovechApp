import { StyleSheet } from 'react-native';
import { WHITE, BLACK, GREY } from 'constants/style';

const styles = StyleSheet.create({
  container: { 
    backgroundColor: WHITE,
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    height: 100,
    width: '90%',
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  infoSection: {
    display: 'flex',
    flex: 1
  },
  infoSectionFooter: {
    marginTop: 'auto',
    marginBottom: 5,
    paddingRight: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  infoSectionTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100
  },
  image: { 
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  qrIcon: {
    marginRight: 3
  },
  address: {
    fontSize: 12
  },
  commerceAddress: {
    marginLeft: 5
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25
  },
  commerceName: {
    color: 'steelblue',
    fontSize: 18
  },
  distance: {
    fontSize: 10
  },
  type: {
    color: GREY
  },
  discountValue: {
    fontSize: 18,
    marginRight: 15,
    alignSelf: 'center'
  }
});

export default styles;
