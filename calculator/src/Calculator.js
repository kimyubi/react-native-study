import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components/native";

const COLOR = {
    RESULT : '#4e4c51',
    RESET : '#5f5262',
    OPERATOR : '#f39c29',
    NUM : '#5c5674'
}


// Button type : 초기화 (reset), 연산자 (operator), 숫자 (num)
const Button = ({text, onPress, flex, type}) => {
    const backgroundColor = 
    type === 'reset' 
    ? COLOR.RESET 
    : type === 'operator' 
        ? COLOR.OPERATOR 
        : type === 'num' 
            ? COLOR.NUM 
            : 'transparent'

    return (
        <TouchableOpacity 
        onPress={onPress} 
        style={{ 
            flex, 
            backgroundColor,
            justifyContent : 'center',
            alignItems : 'center',
            height: 50,
            borderWidth : 0.2 }}>
            <Text style ={{ color : 'white', fontSize : 25}}>{text}</Text>
        </TouchableOpacity>
    )
}



const ButtonContainer = styled.View`
    flexDirection: row;
    width: 100%
`;

export default () => {
    return (
        <View style= {{ flex : 1 , width : "80%"}}>
            {/* AC ~ / */}
            <ButtonContainer>
                <Button
                    type = 'reset'
                    text = 'AC'
                    onPress={() => null}
                    flex = {3}
                />    
                <Button
                    type = 'operator'
                    text = '/'
                    onPress={() => null}
                    flex = {1}
                />      
            </ButtonContainer>  

            <ButtonContainer>
                <Button
                    type = 'num'
                    text = '7'
                    onPress={() => null}
                    flex = {1}
                />    
                <Button
                    type = 'num'
                    text = '8'
                    onPress={() => null}
                    flex = {1}
                />  
                <Button
                    type = 'num'
                    text = '9'
                    onPress={() => null}
                    flex = {1}
                />  
                <Button
                    type = 'operator'
                    text = 'X'
                    onPress={() => null}
                    flex = {1}
                />      
            </ButtonContainer>  


            <ButtonContainer>
                <Button
                    type = 'num'
                    text = '4'
                    onPress={() => null}
                    flex = {1}
                />    
                <Button
                    type = 'num'
                    text = '5'
                    onPress={() => null}
                    flex = {1}
                />  
                <Button
                    type = 'num'
                    text = '6'
                    onPress={() => null}
                    flex = {1}
                />  
                <Button
                    type = 'operator'
                    text = '-'
                    onPress={() => null}
                    flex = {1}
                />      
            </ButtonContainer>  

            <ButtonContainer>
                <Button
                    type = 'num'
                    text = '1'
                    onPress={() => null}
                    flex = {1}
                />    
                <Button
                    type = 'num'
                    text = '2'
                    onPress={() => null}
                    flex = {1}
                />  
                <Button
                    type = 'num'
                    text = '3'
                    onPress={() => null}
                    flex = {1}
                />  
                <Button
                    type = 'operator'
                    text = '+'
                    onPress={() => null}
                    flex = {1}
                />      
            </ButtonContainer>      

            <ButtonContainer>
                <Button
                    type = 'num'
                    text = '0'
                    onPress={() => null}
                    flex = {3}
                />    
                <Button
                    type = 'operator'
                    text = '='
                    onPress={() => null}
                    flex = {1}
                />   
            </ButtonContainer>          
        </View>
    )
}