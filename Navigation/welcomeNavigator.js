import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from '../Screens/SignIn/SignIn';
import SignUpNavigator from './SignUpNavigator';
import Welcome from '../Screens/Welcome';





const stack=createStackNavigator();

export default function WelcomeNavigator() {
    return (
        <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='welcome' component={Welcome}/>
            <stack.Screen name='login' component={SignIn}/>
            <stack.Screen name='signup' component={SignUpNavigator}/>
        </stack.Navigator>
        </NavigationContainer>
    )
}
