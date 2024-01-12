import * as React from 'react';
import { NestedStackNavigator } from './src/NestedStackNavigator';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import { BottomTabNavigator } from './src/BottomTabNavigator';
import { ScreenA } from './src/ScreenA';
import { ScreenB } from './src/ScreenB';

const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name = "ScreenA" component={ScreenA}/>
//         <Stack.Screen name = "ScreenB" component={ScreenB}/>
//         <Stack.Screen name = "NestedStackNavigator" component={NestedStackNavigator}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='NetsteBottomTab' component={BottomTabNavigator}/>
        <Stack.Screen name='ScreenB' component={ScreenB}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
