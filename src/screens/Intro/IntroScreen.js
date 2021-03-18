import React, {Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import {connect} from 'react-redux'
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './IntroStyle'
import images from '../../images'

export const data = [
    {
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: images.thumnail,
      bg: '#59b2ab',
    },
    {
      title: 'Title 2',
      text: 'Other cool stuff',
      image: images.thumnail,
      bg: '#febe29',
    },
    {
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: images.thumnail,
      bg: '#22bcb5',
    },
];
  
export class IntroScreen extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            showRealApp: false
        }
    }
    _keyExtractor = (item) => item.title;

    _renderItem = ({item}) => {
        return (
          <View
            style={[
              styles.slide,
              {
                backgroundColor: item.bg,
              },
            ]}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )
    }
    _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-arrow-round-forward"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        );
    };
    _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
          </View>
        );
    };
    

    render() {
       return (
        <View style={{flex: 1}}>
            <AppIntroSlider
                keyExtractor={this._keyExtractor}
                // renderDoneButton={this._renderDoneButton}
                // renderNextButton={this._renderNextButton}
                renderItem={this._renderItem}
                data={data}
            />
        </View>
       )
    }
}
export default connect()(IntroScreen)