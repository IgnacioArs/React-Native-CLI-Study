import React from 'react'
import { MenuHamburgesa } from '../../components/shared/MenuHamburgesa'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { useProfileStore } from '../../store/profile-store'

export const Tab1Screen = () => {

  //llamaos el estore para obtener y hacer uso de las variables
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);

  return (
    <View style={globalStyles.container}>
        <MenuHamburgesa/>
          <Text style={{alignSelf:'center'}}>
              Tab1Screen
          </Text>
          <Text style={{alignSelf:'center'}}>
              Nombre: {name}
          </Text>
          <Text style={{alignSelf:'center'}}>
              Email: {email}
          </Text>
    </View>
  )
}
