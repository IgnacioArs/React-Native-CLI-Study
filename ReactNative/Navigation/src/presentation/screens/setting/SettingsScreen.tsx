import React from 'react'
import {Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { /* StackActions, */ useNavigation } from '@react-navigation/native';
export const SettingsScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Setting</Text>

             {/*  botton volver */}
              <PrimaryButton 
                  key={1}
                  title={'Volver'}
                  onPress={() => navigation.goBack()}
              />

              {/*  botton volver al inicio */}
              <PrimaryButton 
                  key={2}
                  title={'Volver a Home'} /* en el caso de usar solo un stacKNavigation  navigation.dispatch(StackActions.popToTop())*/
                  onPress={() => navigation.navigate('Home' as never)}
              />
    </View>
  )
}

