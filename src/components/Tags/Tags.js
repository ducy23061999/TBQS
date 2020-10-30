import React from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
import Tags from "react-native-tags";
import Tag from './Tag'
import styles from './TagsStyle'

export default function TagsView({data}) {
    return (
        <Tags
            readonly
            initialTags={["Chicken", "Con La"]}
            onChangeTags={tags => console.log(tags)}
            onTagPress={(index, tagLabel, event, deleted) =>
                console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
            }
            containerStyle={styles.container}
            tagContainerStyle = {styles.marginTag}
            inputStyle= {styles.hide}
            inputContainerStyle = {styles.hide}
            renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                <Tag
                    key = {`${tag}-${index}`}
                    tag = {tag}
                    onPress = {onPress}
                />
            )}
            maxNumberOfTags = {3}
        />
    )
}