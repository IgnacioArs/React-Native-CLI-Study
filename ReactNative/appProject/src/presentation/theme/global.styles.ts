import { Platform, StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    centerContainer: {
        // La propiedad flex: 1 hace que el contenedor ocupe todo el espacio disponible del padre.
        flex: 1,

        // justifyContent:'center' alinea los elementos de manera vertical al centro
        justifyContent: 'center', 

        // alignItems:'center' alinea los elementos de manera horizontal al centro
        alignItems: 'center',

        //para que el fondo sea blanco
        backgroundColor:'#fff'
    },

    title: {
        // fontSize: 80 define el tamaño de la fuente del texto como 80, es bastante grande.
        fontSize: 80,

        // fontWeight: '300' hace que el peso de la fuente sea liviano, muy delgada.
        fontWeight: '300',

        // color: 'black' define el color del texto como negro.
        color: 'black'
    },
    fab: {
  // 'position: absolute' coloca el botón de forma absoluta en relación con su contenedor más cercano
    position: 'absolute',

    // 'margin: 16' agrega un espacio de 16 unidades alrededor del componente
    margin: 16,

    // 'right: 0' coloca el componente en el borde derecho del contenedor
    right: 0,

    // 'bottom: 0' coloca el componente en el borde inferior del contenedor
    bottom: Platform.OS ==='android' ? 15:0,
  },
});