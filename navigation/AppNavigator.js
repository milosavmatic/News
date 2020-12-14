import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from './TabNavigator';
import DetailsNews from '../src/components/detailsNews/detailsNews';
import ContainerCategory from '../src/scenes/category/components/ContainerCategory';



const Stack = createStackNavigator()

const AppNavigator = () => {

    const getHeaderTitle = ({route}) => {
        if (route === "Search") {
            return "Search";
        } else if (route === "Category") {
            return "Categories"
        }
       else {
            return route;
        }
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Top News'} component={TabNavigator}/>
                <Stack.Screen name={'Details News'} component={DetailsNews} />
                <Stack.Screen name={'Category Container'} component={ContainerCategory} options={{
                    title: 'Category'
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator