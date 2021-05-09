import React from 'react'

import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import {
    Body,
    Card,
    CardItem
} from 'native-base'
import styles from './FriendCarouselStyle'
import { SharedElement } from 'react-navigation-shared-element';
import images from '../../../images'
import {CoverView, Tags, ViewMoreText} from '../../../components'
import MapView from 'react-native-maps';
import {useSelector} from 'react-redux'

export default function({style, item}) {
    const {major, location} = item;
    const region = JSON.parse(location);
    const name = item.first_name + ' ' + item.last_name;
    const userData = useSelector(state => state.userReducer)
    const fbAvt = `https://graph.facebook.com/${item.id}/picture?type=large&access_token=${userData.access_token}`;
    return (
        <Card style = {[styles.container, style]}>
            <ScrollView>
            <CoverView 
                    title = {name}
                    desc  = {major.name}
                    image = {{uri: fbAvt}}
                />
                <View style = {styles.borderTopView}>
                    <View style = {styles.content}>
                        <AgeView age = {21}/>
                        <DescriptView longText = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source'/>
                        <TagsView tags = {item.favorites}/>
                        <CustomMapView region = {region} title = {name}/>
                    </View>
                </View>
            </ScrollView>
        </Card>
    )
}

export const AgeView = ({age}) => {
    return (
        <View style = {[styles.ageContent]}>
            <Text style = {styles.keyAgeText}>Tuổi:</Text>
            <Text style = {styles.valueAgeText}>21</Text>
        </View>
    )
}
export const TagsView = ({tags}) => {
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Sở thích</Text>
            <Tags data = {tags}/>
        </View>
    )
}
export const CustomMapView = ({region, title}) => {
    var markers = [
        {
          latitude: 37.78825,
          longitude: -122.4324,
          title: 'Foo Place',
          subtitle: '1234 Foo Drive'
        }
      ];
    return (
        <View style = {[styles.lineSeparate, {marginTop: 10}]}>
            <Text style = {styles.descriptionText}>Bản đồ</Text>
            <MapView
                initialRegion={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                scrollEnabled = {false}
                style = {styles.map}
                cacheEnabled
            >
                <MapView.Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    title={title}
                    description={title}
                />

            </MapView>
        </View>
    )
}
export const DescriptView = ({longText}) => {
    return (
        <View style = {[styles.lineSeparate]}>
            <Text style = {styles.descriptionText}>Tự bạch</Text>
            <ViewMoreText 
                longText = {longText}
            />
        </View>
    )
}