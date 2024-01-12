import React from "react";
import {View, Text, Button} from 'react-native'

export class ScreenB extends React.Component{
    render(){
        return (
            <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                <Text>화면 B입니다. 화면 A로부터 전달받은 값 : {this.props.route.params.value} </Text>
                <Button
                    title='뒤로 가기'
                    onPress={() => {
                        this.props.navigation.navigate('ScreenA')
                    }}
                />
            </View> 
        )
    }
}