
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: '85%',
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
  },
  swipeChildrenContainer: { 
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30 
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});

export default styles;
