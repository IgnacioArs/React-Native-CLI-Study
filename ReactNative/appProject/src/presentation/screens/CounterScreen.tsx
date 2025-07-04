import { StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components"
import { useState } from "react"
import { Button } from 'react-native-paper';

interface Props {
    titulo?:string
}

export const CounterScreen = ({titulo}:Props) => {
    const [contador,setContador] = useState(0);

    const onchangeCounterHandle = (contador:number) => {
          setContador(contador);
    }

    return (
    <View style={styles.container}>
        <Text numberOfLines={1} ellipsizeMode='head' style={styles.title}>{titulo} - {contador}</Text>
        <PrimaryButton 
            titulo="Click contador"
            onchangeCounter={onchangeCounterHandle}
        />
          <Button style={styles.buttonPeper} icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
          </Button>
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
    },
    buttonPeper:{
        marginTop:5,
        width:'50%',
        alignSelf:'center'
    }
})
