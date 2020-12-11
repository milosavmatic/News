import React from "react";
import { Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import NewsScene from '../src/scenes/news/NewsScene';
import { colors } from '../src/styleguide';
import CategoriesScene from '../src/scenes/category/CategoriesScene';
import SearchScene from '../src/scenes/search/SearchScene';

const Tab =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator()
        : createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            shifting={true}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color}) => {
                    let iconName;

                    if (route.name === 'News') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'ios-search' : 'ios-search';
                    } else if (route.name === 'Category') {
                        iconName = focused ? 'ios-list' : 'ios-list'
                    }

                    return <Ionicons name={iconName} size={25} color={color}/>;
                },


                tabBarLabel:
                    Platform.OS === 'android' ? (
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                            {route.name}
                        </Text>
                    ) : (
                        route.name
                    ),
            })}


            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: colors.BUTTON.PRIMARY,
            }}
        >
            <Tab.Screen name={'News'} component={NewsScene}/>
            <Tab.Screen name={'Category'} component={CategoriesScene} screeOptions={{
                headerTitle: 'Categories'
            }}/>
            <Tab.Screen name={'Search'} component={SearchScene} options={{
                headerTitle: 'Search',
                title: 'Search'
            }}/>
        </Tab.Navigator>
    )
}

export default TabNavigator