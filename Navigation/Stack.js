import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const stack = createStackNavigator();
import Prayers from '../Screens/Prayers';
import Home from '../Screens/Home';

export default function Stack() {

    return (
        <stack.Navigator >
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="Prayers" component={Prayers} />
        </stack.Navigator>
    )
}