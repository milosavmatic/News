import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles'


const Buttons = ({title, onNavigation = () => null}) => (
    <TouchableOpacity onPress={onNavigation} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
)


export default Buttons