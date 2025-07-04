import React from 'react'
import { StyleSheet, View } from 'react-native'

export const FlexDirectionScreens = () => {
  return (
    <View style={styles.container}>
                <View style={[styles.box, styles.box1]}/>
                <View style={[styles.box, styles.box2]}/>
                <View style={[styles.box, styles.box3]}/>
                <View style={[styles.box, styles.box1]}/>
                <View style={[styles.box, styles.box2]}/>
                <View style={[styles.box, styles.box3]}/>
                <View style={[styles.box, styles.box1]}/>
                <View style={[styles.box, styles.box2]}/>
                <View style={[styles.box, styles.box3]}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray' ,
        justifyContent:'space-between',   /*aqui jugamos con esto para justificacion contenido*/
        alignItems:'stretch',             // aqui tambien jugamos un rato.   
        flexDirection:'row',              //aqui jugamos con esto la direccion del flex direction
        flexWrap:'wrap',                  /* con esto podemos acomodar desacoplar y ordenar de cierta manera*/
        gap:10,                           /* con esto ordenamos absolutamente el orden siempre y cuando flexWrap lo utilicemos */
        columnGap:0                       /* asi queda este elemento   */
    },
    box:{
        height:100,
        width:100,
    },
    box1:{
        backgroundColor:'#5856D6',
    },
    box2:{
        backgroundColor:'#4240a2',
        /* alignSelf:'flex-end' */          // de esta manera jugamos con el propio elemento.
    },
    box3:{
        backgroundColor:'#2e2d71',
       /*  alignSelf:'center'  */
    }
})
