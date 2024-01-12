import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenC } from './ScreenC';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenA } from './ScreenA';
import { ScreenB } from './ScreenB';

const Stack = createNativeStackNavigator();
const BottomTaa = createBottomTabNavigator();

export class NestedStackNavigator extends React.Component{
  render(){
    return (
        <Stack.Navigator>
          <Stack.Screen name='ScreenA' component={ScreenA} />
          {/* <Stack.Screen name='ScreenB' component={ScreenB} /> */}
          <Stack.Screen name='ScreenC' component={ScreenC} />
        </Stack.Navigator>
    )
  }
}


