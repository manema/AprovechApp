
import { StyleSheet } from 'react-native';
import { WHITE, BLACK, YELLOW_2, YELLOW_3, GREEN } from 'constants/style';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  imageContainer: {
    height: '30%',
    width: '100%'
  },
  image: { 
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    left: 5
  },
  address: {
    marginLeft: 5
  },
  placeholderIcon: {
    flex: 1,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  reviewContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: BLACK,
    borderBottomWidth: 1,
    borderTopColor: BLACK,
    borderTopWidth: 1,
    justifyContent: 'space-between',
    marginHorizontal: 5,
    height: 60,
    width: '90%'
  },
  reviewBottomBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomColor: BLACK,
    borderBottomWidth: 1,
    height: 1,
    width: '90%'
  },
  reviewTopBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderTopColor: BLACK,
    borderTopWidth: 1,
    height: 1,
    width: '90%'
  },
  swipe: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  reviewComponentContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  reviewValue: {
    color: YELLOW_2,
    fontWeight: 'bold'
  },
  reviewTitle: {
    color: YELLOW_3
  },
  reviewValueSection: {
    display: 'flex',
    flexDirection: 'row'
  },
  discountContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '85%',
    minWidth: 60,
    backgroundColor: GREEN,
  },
  discountValue: {
    color: WHITE,
    fontWeight: 'bold',
    fontSize: 18
  },
  btnContainer: {
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 'auto',
    width: '80%'
  },
  descriptionSection: {
    display: 'flex',
    alignSelf: 'center',
    flex: 1,
    width: '90%'
  },
  btn: {
    fontSize: 20
  },
  description: {
    fontSize: 16
  }
});

export default styles;
