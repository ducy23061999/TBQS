import React, {useState, useEffect} from 'react'
import {
    TouchableOpacity,
    Text,
    FlatList
} from 'react-native'
import Tags from "react-native-tags";
import Tag from './Tag'
import styles from './TagsStyle'

export default function TagsView({data, onTagChange, onTagClick}) {
    const [tags, setTags] = useState(data);

    useEffect(() => {
        setTags(data)
    }, [data])

    const removeTag = (tag) => {
        const filterTag = tags.filter(item => item.id != tag.id);
        setTags(filterTag)
        onTagChange && onTagChange(filterTag)
    }
    return (
        <FlatList 
            contentContainerStyle = {{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}
            keyExtractor = {item => item.id}
            data = {tags}
            renderItem = {({item}) => {
                return (
                    <Tag
                        tag = {item.name}
                        onPress = {() => {
                            if (onTagClick) {
                                onTagClick(item)
                            } else {
                                removeTag(item)
                            }
                            
                        }}
                    />)
            }}
        />
        
    )

//     <Tag
//     key = {`${tag}-${index}`}
//     tag = {tag}
//     onPress = {onPress}
// />
}

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}
