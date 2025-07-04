import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../../theme/theme';

interface Props{
  title:string,
  onPress:() => void
}

export const PrimaryButton = ({title,onPress}:Props) => {

  return (
           <Pressable   
               onPress={() => onPress()}
               style={({ pressed }) => [
                 globalStyles.primaryButton,
                 pressed ? { backgroundColor: '#000' } : {}
               ]}>
             <Text style={globalStyles.button}>{title}</Text>
           </Pressable>
  )
}
