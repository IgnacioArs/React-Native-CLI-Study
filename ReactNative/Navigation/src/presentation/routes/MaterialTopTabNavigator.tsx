import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2creen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { CustomIconsIo } from '../components/shared/CustomIconsIo';
import { globalsColor } from '../theme/theme';
import { DescuentosScreens } from '../screens/tabs/ScreensTab/DescuentosScreens';
import { ComprasScreens } from '../screens/tabs/ScreensTab/ComprasScreens';
import { PagosScreens } from '../screens/tabs/ScreensTab/PagosScreens';


export const MaterialTopTabNavigator = () => {

    const Tab = createMaterialTopTabNavigator();
      
      return (
      <Tab.Navigator screenOptions={{
        tabBarInactiveTintColor:globalsColor.primary,
        tabBarPressColor:globalsColor.danger,
        tabBarActiveTintColor:globalsColor.tertiary,
        tabBarIndicatorStyle: {
        backgroundColor: globalsColor.primary, 
        height: 1, 
    },
      }}>
              <Tab.Screen name='Descuentos' options={{title:'Descuentos', tabBarIcon:({color}) => 
                (<Text style={{height:30,width:30,color:color,alignSelf:'center',alignItems:'center'}}>
                        <CustomIconsIo name='receipt-outline' color={globalsColor.primary} size={25}/>
                </Text>)}} 
                component={DescuentosScreens}/>
              <Tab.Screen name='Compras' options={{title:'Compras', tabBarIcon:({color}) => 
                (<Text style={{height:30,width:30,color:color,alignSelf:'center',alignItems:'center'}}>
                        <CustomIconsIo name='cart-outline' color={globalsColor.primary} size={25}/>
                </Text>)}} component={ComprasScreens}/>
              <Tab.Screen name='Pagos' options={{title:'Pagos', tabBarIcon:({color}) => 
                (<Text style={{height:30,width:30,color:color,alignSelf:'center',alignItems:'center'}}> 
                        <CustomIconsIo name='server-outline' color={globalsColor.primary} size={25}/>
                </Text>)}} 
                component={PagosScreens}/>
      </Tab.Navigator>
      )
}
