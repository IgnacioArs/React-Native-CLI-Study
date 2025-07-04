import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
        <View style={styles.purPleBox}>
        <Text style={styles.secondTitle}>Holaaaaa</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        flex:1 /* el flex hace que la pantalla completa de este children sea ocupada */
    },
    title:{
        fontSize:30, /* tamaño de letra */
        paddingHorizontal:35, /* cuanto va estar separado de los lados  AÑADIR ESPACIO INTERNO*/
        paddingVertical:35,   /* cuanto va estar separado arriba y hacia abajo AÑADIR ESPACIO INTERNO*/
        borderWidth:10          /* ancho del box la linea del VIEW EL CONTORNO*/
    },
    purPleBox:{
        height:30,
        backgroundColor:"purple",
        /* margin:20 */             /* AÑADE EXPACIO EXTERNO PARA TODOS LOS LADOS */
        marginVertical:20,      /* AÑADE EXPACIO EXTERNO */
        marginHorizontal:50,    /* AÑADE EXPACIO EXTERNO */
        padding:5,
        borderRadius:10
    },
    secondTitle:{
        color:"#fff",
        alignSelf:'center'
    }
})