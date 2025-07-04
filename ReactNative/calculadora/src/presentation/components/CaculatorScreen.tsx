import React from 'react'
import { GlobalStyles, colors } from '../../config/theme/app-theme';
import { Pressable, Text } from 'react-native'

interface Props{
    label:string,
    color?:string,
    doubleSize?:boolean,
    blackText?:boolean,
    onPress:() => void
}

export const CaculatorScreen = ({
    label,
    color=colors.darkGray,
    doubleSize=false,
    blackText=false,
    onPress
    }:Props) => {
  return (
    <Pressable 
    onPress={() => onPress()}
    style={({pressed}) => ({
        ...GlobalStyles.button,
        backgroundColor:color,
        width:(doubleSize) ? 180:80,
        opacity:(pressed) ? 0.6:1
    })}>
        <Text style={{
            ...GlobalStyles.buttonText,
            color:(blackText) ? 'black':'white'
        }}>{label}</Text>
    </Pressable>
  )
}
