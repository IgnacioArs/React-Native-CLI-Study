import {createStackNavigator} from '@react-navigation/stack'
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/setting/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';

export type RootStackParams = {
  Home:undefined,
  Product:{id:number,name:string},
  Products:undefined,
  Setting:undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{
        headerShown:true,
        headerTitleAlign:'center',
        headerStyle:{
            elevation:10, 
            shadowColor:'transparent'
        }
    }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Products" component={ProductsScreen}/>
        <Stack.Screen name="Product" component={ProductScreen}/>
        <Stack.Screen name="Setting" component={SettingsScreen}/>
    </Stack.Navigator>
  )
}
