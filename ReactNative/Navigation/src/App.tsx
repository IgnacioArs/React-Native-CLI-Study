import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
/* import { StackNavigator } from './presentation/routes/StackNavigator' 
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator'
import { ButtonTabNavigator } from './presentation/routes/ButtonTabNavigator'
 */
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator'
export const App = () => {
  return (
          <NavigationContainer>
              {/* este es el stack navigator LA CUAL SE COMPONE POR MULTIPLES PANTALLAS. */}
              {/*    <StackNavigator/>  */}
              {/* este es el SideMenuNavigator  DRAWER */}
              <SideMenuNavigator/> 
              {/*   <ButtonTabNavigator/> */}
          </NavigationContainer>
  )
}

