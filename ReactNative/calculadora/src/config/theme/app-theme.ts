import { StyleSheet } from "react-native";


export const colors = {
    darkGray:'#2D2D2D',
    lightGray:'#9B9B9B',
    orange:'#FF9427',

    textPrimary:'white',
    textSecondary:'#666666',
    background:'#000000'
}

export const GlobalStyles = StyleSheet.create({
        background:{
            flex:1,
            backgroundColor:colors.background
        },
        /* estitolo para el VIEW */
        calculatorContainer:{
            flex:1,
            padding:20,
            justifyContent:'flex-end'
        },

        /* ROWS ESTO ES PAR LAS FILAS */
        row:{
            flexDirection:'row',
            justifyContent:'center',
            marginBottom:18,
            paddingHorizontal:10
        },

        //textos
        mainResults:{
            color:colors.textPrimary,
            fontSize:70,
            textAlign:'right',
            marginBottom:10,
            fontWeight:'400'
        },

        //calculos resultados
        subResults:{
            color:colors.textSecondary,
            fontSize:40,
            textAlign:'right',
            fontWeight:'300'
        },

        //BOTONES:
        button:{
            height:80,
            width:80,
            backgroundColor:colors.darkGray,
            borderRadius:100,
            justifyContent:'center',
            marginHorizontal:10
        },

        buttonText:{
            textAlign:'center',
            padding:10,
            fontSize:30,
            color:'white',
            fontWeight:'300'
        }
})