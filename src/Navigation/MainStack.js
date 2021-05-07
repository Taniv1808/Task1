import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import navigationStrings from "../constants/navigationStrings";
import {About, Profile } from "../Screen";
import LeftDrawer from "./Drawer";
const Stack=createStackNavigator();


function MainStack(){
  return(
    <>
    <Stack.Screen
      name={navigationStrings.HOMEPAGE}
      options={{
        headerShown:false
      }}
      component={LeftDrawer}
    />
   
     
<Stack.Screen
      name={navigationStrings.ABOUT}
      options={{
        headerShown:false
      }}
      component={About}
    />

    <Stack.Screen
      name={navigationStrings.PROFILE}
      options={{
        headerShown:false
      }}
      component={Profile}
    />
    
      </>
  )
}

export default MainStack;