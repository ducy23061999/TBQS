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
import { Screens } from '../../comon/Constants';

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
            showRealApp: false,
            data: [
              {
                image: images.fiend,
                title: "Tìm bạn",
                description: "Tìm những người bạn hợp gu với mình",
                bg: "#0984e3"
              },
              {
                image: images.friendship,
                title: "Lập nhóm",
                description: "Tụ tập đàn đúm với chức năng lập nhóm",
                bg: "#81ecec"
              },
              {
                image: images.crowd,
                title: "Ghép nhóm",
                description: "Ghép các nhóm thành một tiểu đội",
                bg: "#fab1a0"
              }
            ]
        }
    }

    onPressDone = () => {
      this.props.navigation.replace(Screens.AuthNavigate)
    }

    _keyExtractor = (item) => item.title;

    _renderItem = ({item, index}) => {
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
            <Text style={styles.text}>{item.description}</Text>
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
                onDone = {this.onPressDone}
                renderItem={this._renderItem}
                data={this.state.data}
            />
        </View>
       )
    }
}
export default connect()(IntroScreen)