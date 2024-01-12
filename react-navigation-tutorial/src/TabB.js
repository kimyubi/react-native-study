import React from "react";
import { Text, View } from "react-native";

export class TabB extends React.Component{
    render(){
        return(
            <View style = {{ flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Text>이것은 TAB B입니다.</Text>
            </View>
        )
    }
}