import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabA } from './TabA';
import { TabB } from "./TabB";
import { NestedStackNavigator } from './NestedStackNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';



const BottomTab = createBottomTabNavigator();

export class BottomTabNavigator extends React.Component{
    render(){
        return(
            <BottomTab.Navigator>
                <BottomTab.Screen 
                name = "홈 화면" 
                component={TabA} 
                options={{tabBarIcon: ()=> <Ionicons name='home' size={20}/>}}
                />

                <BottomTab.Screen 
                name = "설정" 
                component={NestedStackNavigator} 
                options={{tabBarIcon: ()=> <Ionicons name='settings-outline' size={20}/>}}
                />
          </BottomTab.Navigator>
        )
    }

}