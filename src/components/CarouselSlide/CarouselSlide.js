import React, {useState, useEffect, useRef, useMemo} from 'react'
import Carousel from 'react-native-snap-carousel';
import {defaultScrollInterpolator, shiftAnimatedStyles} from 'react-native-snap-carousel/src/utils/animations'


export default function({data, sliderWidth, itemWidth, renderItem, activeIndex}) {
    
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
            firstItem = {activeIndex}          
        />
    )
}