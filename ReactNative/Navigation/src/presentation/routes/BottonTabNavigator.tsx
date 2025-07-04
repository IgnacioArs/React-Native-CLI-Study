import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
/* import { Tab2Screen } from '../screens/tabs/Tab2creen'; */
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { Text } from 'react-native';
import { MaterialTopTabNavigator } from './MaterialTopTabNavigator';
import { CustomIconsIo } from '../components/shared/CustomIconsIo';
import { globalsColor } from '../theme/theme';

const Tab = createBottomTabNavigator();

export const BottonTabNavigator = () => {
  
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:globalsColor.primary,
                tabBarLabelStyle: {
                marginBottom: 5,                  // Espacio debajo del texto de la etiqueta para mejor separación
                borderColor: '#000',              // Color del borde del texto (si lo usas)
                },
                headerStyle: {
                elevation: 0,                     // Quita sombra en Android en el header
                shadowOpacity: 0,                 // Quita sombra en iOS en el header
                borderTopColor: 'transparent',    // Quita borde superior del header
                borderBottomColor: 'transparent', // Quita borde inferior del header
                },
                headerTitleAlign: 'center',       //Aquí centramos el título del header
                tabBarStyle: {
                borderTopWidth: 0,                // Quita línea superior de la barra de tabs
                elevation: 0,                     // Quita sombra en Android en barra de tabs
                shadowOpacity: 0,                 // Quita sombra en iOS en barra de tabs
                shadowOffset: { height: 0, width: 0 }, // Evita sombra desplazada
                shadowRadius: 0,                  // Elimina radio de sombra
                borderTopColor: 'transparent',    // Hace transparente borde superior si queda
                },
            }}
            >
            <Tab.Screen name='Tab1' options={{title:'Compras Recientes', tabBarIcon:({color}) => 
                (<Text style={{height:50,width:50,color:color,marginLeft:20}}>
                    <CustomIconsIo name='arrow-back-outline' color={globalsColor.primary} size={25}/>
                </Text>)}} 
                component={Tab1Screen}/>
            
            <Tab.Screen name='Tab2' options={{title:'Mis Actividades', tabBarIcon:({color}) => 
                (<Text style={{height:50,width:50,color:color,marginLeft:20}}>
                    <CustomIconsIo name='chevron-expand-outline' color={globalsColor.primary} size={25}/>
                </Text>)}} 
                component={MaterialTopTabNavigator}/>

            <Tab.Screen name='Tab3' options={{title:'Noticias', tabBarIcon:({color}) => 
                (<Text style={{height:50,width:50, color:color, marginLeft:20}}>
                   <CustomIconsIo name='arrow-forward-outline' color={globalsColor.primary} size={25}/>
                </Text>)}} 
                component={Tab3Screen}/>
        </Tab.Navigator>
  )
}
