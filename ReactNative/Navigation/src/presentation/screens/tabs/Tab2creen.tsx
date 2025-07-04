import React, { useEffect } from 'react'
import { MenuHamburgesa } from '../../components/shared/MenuHamburgesa'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'


export const Tab2Screen = () => {

  useEffect(()=>{
    console.log("holaaaa");
  },[])

  return (
     <View style={globalStyles.container}>
        <MenuHamburgesa/>
        <Text>Tab2Screen</Text>
    </View>
  )
}
