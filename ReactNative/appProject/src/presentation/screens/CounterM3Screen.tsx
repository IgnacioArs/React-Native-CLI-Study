import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { GlobalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


export const CounterM3Screen = () => {

    const [contador,setContador] = useState(10);


  return (
    <View style={GlobalStyles.centerContainer}>
        <Text style={GlobalStyles.title}>{contador}</Text>
        <Icon name="accessibility-outline" size={60}></Icon>
        <FAB
            label='+1'
            icon="add" 
            style={GlobalStyles.fab}
            onPress={() => setContador(contador+1)}
        />
    </View>
  )
}

