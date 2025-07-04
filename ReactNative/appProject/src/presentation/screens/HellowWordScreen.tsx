import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props{
    name?:string
}


export const HellowWordScreen = ({name ='World'}:Props) => {
  return (
    <View style={styles.container}>
        <Text numberOfLines={1} ellipsizeMode='head' style={styles.title}>Hola, {name}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    title:{
        fontSize:45,
        textAlign: 'center',
        color:'black',
        padding:20
    }
})

