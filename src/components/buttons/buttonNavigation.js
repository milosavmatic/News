import React from 'react'
import { Button } from 'react-native';


const ButtonNavigation = (title, onNavigation = () => null) => (
    <Button title={title} onPress={() => onNavigation} />
)


export default ButtonNavigation