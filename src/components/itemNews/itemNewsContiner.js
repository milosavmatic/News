import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';


const ItemNewsContainer = ({
                               image,
                               title,
                               titleButton,
                               description,
                               onChangeScene = () => null,
                               navigationBack = () => null,
                               titleBackButton,
                           }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image source={{uri: image}} style={styles.image}/>
            <Text style={styles.description}>{description}</Text>
            <TouchableOpacity style={styles.linkButton} onPress={onChangeScene}>
                <Text style={styles.textButton}>
                    {titleButton}
                </Text>
            </TouchableOpacity>
            {titleBackButton ? <TouchableOpacity onPress={navigationBack}>
                <Text style={styles.textButton}>
                    {titleBackButton}
                </Text>
            </TouchableOpacity> : null}
        </View>
    )
}

export default ItemNewsContainer;