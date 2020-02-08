
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    minHeight: '85%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  swipe: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
  },
  swipeChildrenContainer: { 
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  swipeChildrenContainerMarginBottom: { 
    marginTop: 35
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    alignSelf: 'center',
    width: '90%'
  }
});

export default styles;
