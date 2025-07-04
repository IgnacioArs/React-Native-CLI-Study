import React from 'react'
import { MenuHamburgesa } from '../../components/shared/MenuHamburgesa'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'


export const Tab3Screen = () => {
  return (
     <View style={globalStyles.container}>
        <MenuHamburgesa/>
        <Text style={{alignSelf:'center'}}>Noticias Screens</Text>
    </View>
  )
}
