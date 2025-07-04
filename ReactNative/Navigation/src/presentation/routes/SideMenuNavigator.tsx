import { createDrawerNavigator,DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
/* import { StackNavigator } from './StackNavigator'; */
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalsColor } from '../theme/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottonTabNavigator } from './BottonTabNavigator';
import { SettingsScreen } from '../screens/setting/SettingsScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { CustomIconsIo } from '../components/shared/CustomIconsIo';


/*     OJO ESTE ES EL DRAWER SITEMA DE NAVEGACION*/
const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator 
    /*creamos con esta propiedad contenido para el drawer */
    drawerContent={(props) => <>
        <CustomDrawerComponent {...props}/>
    </>}

      screenOptions={{
          drawerType:(dimensions.width >= 758) ? 'permanent':'slide',/* 'slide', */  /* esto es para mover y mostrar el menu */
          headerShown:false,  /*este es el encabezado header hay que sacarlo */
          drawerPosition:'left',  /* la posicion desde donde se va estirar se va a desplazar */
          drawerActiveBackgroundColor:globalsColor.primary,
          drawerActiveTintColor:'white',
          drawerInactiveBackgroundColor:'white',
          drawerItemStyle:{
              borderRadius:100,
              paddingHorizontal:20,
              marginVertical:5,
          }
      }}
      >   

      {/* En vez de usar este estack vamos a utilizar este stacknavigator */}
      {/* <Drawer.Screen name='StackNavigator'  component={StackNavigator}/> */}
      {/* AQUI IMPLEMENTAMOS Y DAMOS USA AL BOTTONTAB */}

      <Drawer.Screen name='Menu'     
      options={{drawerIcon:() => 
        (<>
         <Text>
           <CustomIconsIo name='grid-outline' color='black' size={25}/>
         </Text>
        </>)}} 
      component={BottonTabNavigator}/>

      <Drawer.Screen name='Home'     
      options={{drawerIcon:() => 
        (<>
         <Text>
             <CustomIconsIo name='home-outline' color='black' size={25}/>
         </Text>
        </>)}} 
      component={HomeScreen}/>

      <Drawer.Screen name='Products' 
          options={{
          drawerItemStyle: { display: 'none' }
          }}
      component={ProductsScreen}/>

      <Drawer.Screen name='Product' 
      options={{
       drawerItemStyle: { display: 'none' }
      }}
      component={ProductScreen}/>

      <Drawer.Screen name='Profile'  options={{drawerIcon:() => 
         (<>
         <Text>
             <CustomIconsIo name='person-outline' color='black' size={25}/>
         </Text>
         </>)}} component={ProfileScreen}/>

      <Drawer.Screen name='Setting'  options={{drawerIcon:() => 
        (<>
         <Text>
            <CustomIconsIo name='settings-outline' color='black' size={25}/>
         </Text>
        </>)}} 
        component={SettingsScreen}/>

    </Drawer.Navigator>
  );
}


const CustomDrawerComponent = (props:DrawerContentComponentProps) => {
 
    return (
        <DrawerContentScrollView>
            <View style={{
                height:200,
                backgroundColor:globalsColor.primary,
                margin:30,
                borderRadius:50
            }}/>

            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )   
}