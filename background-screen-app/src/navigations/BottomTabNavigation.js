import React from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteImageScreen } from '../screen/FavoriteImageScreen';
import {ImageListScreen} from '../screen/ImageListScreen'
import { TabIcon } from '../components/TabIcon';

const Tabs = createBottomTabNavigator();

export const BottomTabNavigation = (props) => {
    return(
        <Tabs.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
                const getIconName = () => {
                    if (route.name === 'ImageList'){
                        return 'home'
                    }
                    if (route.name === 'FavoriteImage'){
                        return 'star'
                    }
                }
                const iconName = getIconName();
                return (
                    <TabIcon iconName={iconName} iconColor={focused? 'black' : 'lightgray'}/>
                )
            }
        })}>
            <Tabs.Screen name='ImageList' component={ImageListScreen}/>
            <Tabs.Screen name='FavoriteImage' component={FavoriteImageScreen}/>
        </Tabs.Navigator>
    )
}