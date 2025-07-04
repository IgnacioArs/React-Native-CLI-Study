import React from 'react'
import {SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import IoIcon from 'react-native-vector-icons/Ionicons';



/* import {HellowWordScreen} from './src/presentation/screens/HellowWordScreen' */
/* import { CounterScreen } from './src/presentation/screens/CounterScreen' */
/* import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen' */
/* import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen'; */
/* import { DimensionScreen } from './src/presentation/screens/DimensionScreen'; */
/* import { PositionScreen } from './src/presentation/screens/PositionScreen'; */
/* import { FlexScreens } from './src/presentation/screens/FlexScreens'; */
/* import { FlexDirectionScreens } from './src/presentation/screens/FlexDirectionScreens'; */
/* import { HomeWork01 } from './src/presentation/screens/05Ejercicios/HomeWork01'; */
/* import { HomeWork02 } from './src/presentation/screens/05Ejercicios/HomeWork02'; */
/* import { HomeWork03 } from './src/presentation/screens/05Ejercicios/HomeWork03'; */
/* import { HomeWork04 } from './src/presentation/screens/05Ejercicios/HomeWork04'; */
/*  import { HomeWork05 } from './src/presentation/screens/05Ejercicios/HomeWork05';  */
/* import { HomeWork06 } from './src/presentation/screens/05Ejercicios/HomeWork06';  */
/* import { HomeWork07 } from './src/presentation/screens/05Ejercicios/HomeWork07'; */
/* import { HomeWork08 } from './src/presentation/screens/05Ejercicios/HomeWork08'; */
/* import { HomeWork09 } from './src/presentation/screens/05Ejercicios/HomeWork09'; */
/* import { HomeWork10 } from './src/presentation/screens/05Ejercicios/HomeWork10'; */

export const App = () => {
  return (
    //AL PEPER HAY QUE REALIZAR CONFIGURACIONES SETTING
    <PaperProvider
      settings={{
        icon:(props) => <IoIcon {...props}/>
      }}
    >
            <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
                {/*  PRIMEROS PASOS CON EL HOLLA MUNDO. */}
                {/*  <HellowWordScreen name='Benjamin Ignacio'/> */}

                {/*CONTADOR */}
                {/*      {<CounterScreen  titulo='Contador' />} */}

                {/* CONTADOR CON MATERIAL 3 */}
                {/* <CounterM3Screen/> */}

                {/*  ********************************************************************** */}
                {/*  SECCION 5  ESTOS YA SON HIJOS*/}
                {/* <BoxObjectModelScreen/> */}
                {/* <DimensionScreen/> */}
                {/* <PositionScreen/> */}
                {/* <FlexScreens/> */}
                {/* <FlexDirectionScreens/> */}
                {/* <HomeWork01/> */}
                {/*  <HomeWork02/> */}
                {/* <HomeWork03/> */}
                {/* <HomeWork04/> */}
                {/* <HomeWork05/> */}
                {/*  <HomeWork06/> */}
                {/* <HomeWork07/> */}
                {/* <HomeWork08/> */}
                {/* <HomeWork09/> */}
                {/*  <HomeWork10/> */}
                </SafeAreaView>
    </PaperProvider>
  )
}

