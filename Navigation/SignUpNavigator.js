import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Signup1 from '../Screens/SignUpScreens/Signup1';
import Signup2 from '../Screens/SignUpScreens/SignUp2';
import SignUp3 from '../Screens/SignUpScreens/SignUp3';


const stack=createStackNavigator();

export default function SignUpNavigator() {
    return (
        <stack.Navigator headerMode="none">
            <stack.Screen name='signup1' component={Signup1}/>
            <stack.Screen name='signup2' component={Signup2}/>
            <stack.Screen name='signup3' component={SignUp3}/>
        </stack.Navigator>
    )
}
