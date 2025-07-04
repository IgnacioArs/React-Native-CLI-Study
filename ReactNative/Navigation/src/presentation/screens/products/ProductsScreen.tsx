import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator'

const productos = [
  {id:1,name:'Producto 1'},
  {id:2,name:'Producto 2'},
  {id:3,name:'Producto 3'},
  {id:4,name:'Producto 4'},
  {id:5,name:'Producto 5'},
  {id:6,name:'Producto 6'},
  {id:7,name:'Producto 7'},
]


export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.text}>List Products</Text>

         {/* //flatlist para una lista de productos */}
          <FlatList
          data={productos}
          renderItem={(data) => (
            <PrimaryButton 
             key={data.item.id}
             title={data.item.name}
             onPress={() => navigation.navigate('Product',{id:data.item.id,name:data.item.name})}
            />
          )}  
          />


          <Text style={globalStyles.text}>Ajustes</Text>
            <PrimaryButton 
             title='Ajustes'
             onPress={() => navigation.navigate('Setting')}
            />
    </View>
  )
}
