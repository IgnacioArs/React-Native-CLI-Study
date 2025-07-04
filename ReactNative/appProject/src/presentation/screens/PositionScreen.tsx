import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.greenBox}>
                <Text style={styles.title}>Green</Text>
        </View>

        <View style={styles.purpleBox}>
                <Text style={styles.title}>Purple</Text>
        </View>

        <View style={styles.orangeBox}>
                <Text style={styles.title}>Orange</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        /*justifyContent:'center',
        alignItems:'center'*/
    },
    purpleBox:{ 
        width:100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor:'white',
        position:'absolute', /*pasamos a posicion absoluta*/
        bottom:0,
        /*con esto podemos realizar la posiscion a un que la tengamos relativa que 
        siempre estara en la izquierda y hacia abajo al crearse otro */
    },
    orangeBox:{ 
        width:100,
        height:100,
        backgroundColor:'#F0A23B',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        right:0
    },
    greenBox:{ 
        backgroundColor:'green',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0 
/*         ...StyleSheet.absoluteFillObject */  /* es una tecnica para acaparar toda la pantalla del padre */
    },
    title:{
        color:'#fff',
        alignSelf:'center',
        top:'50%'   /* aqui dejamos al medio el texto */
    }
})


/* 
position: relative, se le permite moverlo de su posición predeterminada sin afectar el flujo de los demás 
elementos alrededor de él. Esto significa que, aunque muevas el elemento, el espacio que ocupa seguirá 
estando reservado en el layout.  LOS HIJOS SIEMPRE ESTARAN RELATIVAMENTE SU POSICION AL PADRE.
div { 
  position: relative;
  top: 20px;     Mueve el div 20px hacia abajo desde su posición original 
  left: 30px;    Mueve el div 30px hacia la derecha desde su posición original 
} */