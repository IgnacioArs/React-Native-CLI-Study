import {type RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Alert, FlatList,View } from 'react-native'
import { type RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { useEffect, useState } from 'react';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const ProductScreen = () => {

    // desde productos que es products venimos a product que es producto
    const {id,name} = useRoute<RouteProp<RootStackParams,'Product'>>().params;
    //seteamos la data para iterar la tambien usarla.
    const [data,setData] = useState([{id:id,name:name}]);

    //importamos navigation
    const navigation = useNavigation();
    
    //alerta para mostrar el producto
    const alertProduct = (id:number,name:string) => {
      Alert.alert(
        "Producto",
        "ID:  "+`${id}`+"       "+"NAME:  "+`${name}`,
        [
          {
            text: "Cancelar",
            onPress: () => console.log("Cancelado"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: () => console.log("OK presionado")
          }
        ],
        { cancelable: false }
      );
    };


    //aqui mostramos los datos en el header
    useEffect(() => {
      navigation.setOptions(({
        title:'(ID'+' '+id+' )'+'(NAME'+' '+name+')',
      }))
    },[])

  return (
    <View style={globalStyles.container}>
                {/* //flatlist para una lista de productos */}
                  <FlatList
                  data={data}
                  renderItem={(data) => (
                    <PrimaryButton 
                     key={data.item.id}
                     title={data.item.name}
                     onPress={() => alertProduct(data.item.id,data.item.name)}
                    />
                  )}  
                  />
    </View>
  )
}
