import React from "react";
import { Text, View } from "react-native";

export class TabA extends React.Component{
    render(){
        return(
            <View style = {{ flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Text>이것은 TAB A입니다.</Text>
            </View>
        )
    }
}