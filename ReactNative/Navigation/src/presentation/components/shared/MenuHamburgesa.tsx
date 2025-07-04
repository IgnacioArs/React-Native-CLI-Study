import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native';
import { CustomIconsIo } from '../../components/shared/CustomIconsIo'

export const MenuHamburgesa = () => {

      const navigation = useNavigation();

      useEffect(() => {
          navigation.setOptions({
            headerLeft:() => (
              <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                <Text style={{marginLeft:20,fontSize:20,position:'absolute'}}>
                  <CustomIconsIo name='menu-outline' size={30} color='black'/>
                </Text>
              </Pressable>
            )
          })
      },[])       
      
      
  return (  
      <>
      </>
  )
}
