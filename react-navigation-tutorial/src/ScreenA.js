import { Button, Text, View } from "react-native";
import React from 'react';

export class ScreenA extends React.Component{
    render(){
        return (
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <Text>화면 A입니다.</Text>
                <Button
                    title='B 스크린으로 이동하기'
                    onPress={() => {
                        this.props.navigation.navigate('ScreenB', {value : 'from A'})
                    }}
                />
                <Button
                    title='C 스크린으로 이동하기'
                    onPress={() => {
                        this.props.navigation.navigate('NestedStackNavigator', {screen : 'ScreenC'})
                    }}
                />
            </View> 
        )
    }
}