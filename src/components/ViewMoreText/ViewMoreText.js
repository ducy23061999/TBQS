import React from 'react'
import ViewMoreText from 'react-native-view-more-text';
import { Text } from 'react-native'
import styles from './ViewMoreTextStyle'

export default function({longText}) {

    const renderViewMore = (onPress) => {
        return(
            <Text 
              onPress={onPress}
              style = {styles.clickableText}
            >
                Xem thêm
            </Text>
        )
    }
    const renderViewLess = (onPress) => {
        return(
            <Text 
              onPress={onPress}
              style = {styles.clickableText}
            >
                  Thu gọn
            </Text>
        )
    }
    return (
        <ViewMoreText
          numberOfLines={5}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={styles.textContent}
        >
          <Text>
            {longText}
          </Text>
        </ViewMoreText>
    )
}