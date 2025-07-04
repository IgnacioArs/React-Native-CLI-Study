import { StyleSheet } from "react-native"

export const globalsColor = {
    primary:'#7037eb',
    secundary:'#f52585',
    tertiary:'#3a0ca3',
    success:'#4cc9f0',
    warning:'#fca311',
    danger:'#e71d36',
    dark:'#22223b',
    background:'#fff'
};

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:globalsColor.background
    },

    primaryButton:{
        backgroundColor: globalsColor.primary,
        borderRadius:5,
        padding:10,
        marginBottom:10,
        /*marginVertical:10, */
        /*margin:10, */
        width:'100%',
        alignItems:'center'
    },

    button:{
        color:globalsColor.background,
        fontSize:18
    },
    //esto es para el texto
    text:{
        padding:10,
        marginBottom:10,
        color:'black',
        alignSelf:'flex-start',
        fontSize:30,
        fontStyle:'italic',
        fontWeight:'500'
    }


});