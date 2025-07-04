import React, { useEffect, useState } from 'react'
import { Platform, Pressable, StyleSheet, Text} from 'react-native'

interface Props{
    titulo?:string,
    onchangeCounter:(contador:number) => void  // Función callback para pasar el contador al padre
}
export const PrimaryButton = ({titulo,onchangeCounter}:Props) => {
    const [contador,setContador] = useState(0);
        
    const handleSuma = (numero:number) => {
        setContador((preContador) => preContador+numero);
    }


    useEffect(()=> {
        onchangeCounter(contador)
    },[contador])

  return (
        <Pressable style={({pressed}) => [
                styles.button,
                pressed && styles.buttonPressed
            ]} onPress={() => handleSuma(1)}
            >
            <Text style={styles.titleButton}>{titulo}</Text>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:Platform.OS ==='android' ? 'black':'white',
        paddingHorizontal:20,
        paddingVertical: 10,
        borderRadius:20,
        width:"50%",
        alignSelf:"center",
        alignItems:"center",
        marginTop:10,
    },
    titleButton:{
                color:Platform.OS ==='android' ? 'white':'black'
    },
    buttonPressed:{
        backgroundColor:'blue'
    }
})
