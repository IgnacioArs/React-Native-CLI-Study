import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {

  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  //aqui llamos a nuestro store y tomamos las propiedades
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  
   // aqui usamos el store para poder obtener las funciones que cambiaran el estado
   const onchangeNameFunctions = useProfileStore();
   const {onchangeName,onchangeEmail,onResetName,onResetEmail}  = onchangeNameFunctions;
  
   const onchangeNameState =(name:string) => {
      onchangeName(name);
  }

  const onchangeEmailState =(email:string) => {
      onchangeEmail(email);
  }

  //para resetear el valor
  const onResetNameState =() => {
        onResetName();
  }
  
  const onResetEmailState = () => {
        onResetEmail();
  }

  return (
    <View style={{
      flex:1,
      paddingHorizontal:20,
      marginTop:top + 20 
    }}>
        <Text style={{padding:20,alignSelf:'center',fontSize:20}}>ProfileScreen</Text>

        <Text style={{padding:20,alignSelf:'center',fontSize:20}}>Nombre: {name}</Text>
        <Text style={{padding:20,alignSelf:'center',fontSize:20}}>Email: {email}</Text>

        <PrimaryButton 
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
          title='Abrir Menu'
         />

        <Text style={{padding:20,alignSelf:'center',fontSize:20}}>Cambiar estados</Text>
        <PrimaryButton 
          onPress={() => onchangeNameState('Gonzalo')}
          title='Cambiar Nombre'
         />

        <PrimaryButton 
          onPress={() => onchangeEmailState('Gonzale@gmail.com')}
          title='Cambiar Email'
         />

        <PrimaryButton 
          onPress={() => onResetNameState()}
          title='Resetear Nombre'
        />

        <PrimaryButton 
          onPress={() => onResetEmailState()}
          title='Resetear Email'
        />
    </View>
  )
}
