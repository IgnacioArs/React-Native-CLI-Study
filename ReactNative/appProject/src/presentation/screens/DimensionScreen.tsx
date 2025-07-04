import React from 'react'
import { StyleSheet,useWindowDimensions,View } from 'react-native'
import { Dimensions } from 'react-native'
import { Text } from 'react-native-paper';

/* const {width,height} = Dimensions.get('window');
 */
export const DimensionScreen = () => {

    const {width,height} = useWindowDimensions();
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width:width * 0.5
                }}></View> {/* EL TEMA ES QUE PODEMOS SOBREESCRIBIR LAS DIMENSIONES  0.5 -> 50 % */}
            </View>

            <Text style={styles.title}>W: {width}          /           H:{height}</Text>
        </View>
  )
}



const styles = StyleSheet.create({
    container:{
        /* width:'100%', */
        width:500,
        height:500,
        backgroundColor:'red'
    },
    purpleBox:{
        backgroundColor:'#5856D6',
        height:'50%',
        width:'50%'
    },
    title:{
        color:'#000'
    }
})