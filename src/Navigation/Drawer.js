import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { About, Back, HomePage, Profile } from '../Screen';
import navigationStrings from '../constants/navigationStrings';
import { Button } from 'react-native';

const Drawer = createDrawerNavigator();

export default function LeftDrawer(){
  return (
      <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#dcdcdc',
        width: 195,
      }}>
          <Drawer.Screen name={navigationStrings.HOMEPAGE} component={HomePage}/>
          <Drawer.Screen name={navigationStrings.ABOUT} component={About} />
          <Drawer.Screen name={navigationStrings.PROFILE} component={Profile} />
          
      </Drawer.Navigator>
  )
}