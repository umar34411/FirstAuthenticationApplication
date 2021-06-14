import React from 'react'
import { Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AntDesign from 'react-native-vector-icons/AntDesign'

import Posts from '../Screens/App/Posts'
import Messages from '../Screens/App/Messages';
import Account from '../Screens/App/Account';

export default function AppNavigator(){
    
    const Bottoms=createBottomTabNavigator();


    return(
        <NavigationContainer>
            <Bottoms.Navigator>
                <Bottoms.Screen  name='Posts' component={Posts} 
                 options={{
                    //  tabBarIcon:()=><AntDesign name='home' size={24} color="tomato"/>
                 }}
                />
                <Bottoms.Screen name='messages' component={Messages}
                 options={{
                    // tabBarIcon:()=><AntDesign name='message1' size={24} color="tomato"/>
                }}
                />
                <Bottoms.Screen name='account' component={Account}
                 options={{
                    // tabBarIcon:()=><AntDesign name='profile' size={24} color="tomato"/>
                }}
                />
            </Bottoms.Navigator>
        </NavigationContainer>
    )
}