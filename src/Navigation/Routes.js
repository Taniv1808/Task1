import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import AuthStack from '../Navigation/AuthStack';
import MainStack from './MainStack';
const Stack=createStackNavigator();

 function Routes(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
       
            {MainStack()}         
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;