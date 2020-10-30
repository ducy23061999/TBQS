import React, {useState} from 'react'
import Carousel from 'react-native-snap-carousel';
import {defaultScrollInterpolator, shiftAnimatedStyles} from 'react-native-snap-carousel/src/utils/animations'


export default function({data, sliderWidth, itemWidth, renderItem}) {

    const [index, setIndex] = useState(0)
    return (
        <Carousel 
            data = {data}
            renderItem = {renderItem}
            sliderWidth = {sliderWidth}
            itemWidth = {itemWidth}
            inactiveSlideShift={0}
            contentContainerStyle = {{backgroundColor: 'blue'}}
            scrollInterpolator={defaultScrollInterpolator}
            slideInterpolatedStyle={shiftAnimatedStyles}
            useScrollView={true}
        />
    )
}