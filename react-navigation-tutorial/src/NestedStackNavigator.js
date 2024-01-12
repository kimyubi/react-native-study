import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenC } from './ScreenC';

const Stack = createNativeStackNavigator();

export class NestedStackNavigator extends React.Component{
  render(){
    return (
        <Stack.Navigator>
          <Stack.Screen name='ScreenC' component={ScreenC} />
        </Stack.Navigator>
    )
  }
}
