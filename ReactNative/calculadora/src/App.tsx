import React from 'react'
import { View,StatusBar } from 'react-native'
import { CalculatorScreens } from './presentation/screens/CalculatorScreens'
import { GlobalStyles } from './config/theme/app-theme'


export const App = () => {
  return (
    <View style={GlobalStyles.background}>
        <StatusBar 
          barStyle={'light-content'}
          backgroundColor={'black'}
        />

        <CalculatorScreens/>
    </View>
  )
}

