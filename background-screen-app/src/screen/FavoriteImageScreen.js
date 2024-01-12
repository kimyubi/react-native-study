import { Text, View } from "react-native";
import React from 'react';
import { Typography } from "../components/Typography";


export const FavoriteImageScreen = (props) => {
    return(
        <View style={{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
            <Typography fontSize={20}>
                즐겨찾기한 이미지
            </Typography>
        </View>
    )
}