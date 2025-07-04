import React, { useEffect } from 'react'
import { globalStyles } from '../../theme/theme'
import { Pressable, Text, View } from 'react-native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator'


export const HomeScreen = () => {
  
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(()=> {
    navigation.setOptions({
      headerLeft:() => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text style={{marginLeft:15,fontSize:15}}>Menu</Text>
        </Pressable>
      )
    })
  },[])

  return (
    <View style={globalStyles.container}>
            <PrimaryButton  title='Productos' onPress={() => navigation.navigate('Products')}/>
            <PrimaryButton  title='Setting'  onPress={() => navigation.navigate('Setting')}/> 
    </View>
  )
}
