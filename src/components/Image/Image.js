import React from 'react'
import { Image } from 'react-native'
import FastImage from 'react-native-fast-image'
import Utils from '../../comon/Utils'

export default function({uri, style = {}, resizeMode = 'contain'}) {
    const isRemote = Utils.isURL(uri);

    return isRemote ?
        <FastImage 
            source = {{
                uri: uri,
                priority: FastImage.priority.normal,
                cache: 'cacheOnly'
            }}
            resizeMode={resizeMode}
            style = {style}

        />
        :
        <Image 
            source = {uri}
            resizeMode = {resizeMode}
            style = {style}
        />
   
}