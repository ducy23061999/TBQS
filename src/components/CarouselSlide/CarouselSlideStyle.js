import {StyleSheet, Dimensions} from 'react-native'


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const styles = StyleSheet.create({
    carouselContainer: {
      marginTop: 50
    },
    itemContainer: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemLabel: {
      color: 'white',
      fontSize: 24
    },
    counter: {
      marginTop: 25,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });