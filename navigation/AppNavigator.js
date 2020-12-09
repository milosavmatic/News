import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from './TabNavigator';
import DetailsNews from '../src/scenes/news/details/detailsNews';


const Stack = createStackNavigator()


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Top News'} component={TabNavigator} />
                <Stack.Screen name={'Details News'} component={DetailsNews} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator