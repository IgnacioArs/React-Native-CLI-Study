import { View,Text } from 'react-native'
import { colors, GlobalStyles } from '../../config/theme/app-theme';
import { CaculatorScreen } from '../components/CaculatorScreen';
import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreens = () => {

     //mandamos a llamar el hook
     const {
          formula,numberInitial,prevNumber,
          buildNumber,
          toggleSign,
          clean,
          deleteOperation,
          divideOperation,multipliOperation,subtractOperation,addOperation,
          calculateResult
     } = useCalculator();
    
     

  return (
    <View style={GlobalStyles.calculatorContainer}>
         {/*configuracion para los resultados*/}
          <View style={{paddingHorizontal:30, paddingBottom:20}}>
            
              <Text 
               adjustsFontSizeToFit
               numberOfLines={1}
               style={GlobalStyles.mainResults}
               >{formula}</Text>

               {
               (formula ===prevNumber) ? <Text style={GlobalStyles.subResults}></Text> 
               :
               (             
               <Text 
               adjustsFontSizeToFit
               numberOfLines={1}
               style={GlobalStyles.subResults}>{prevNumber}</Text>) 
               }
          
          </View>

            {/*View para las secciones de boton por ROWS*/}
           <View style={GlobalStyles.row}>

                <CaculatorScreen onPress={() => clean()}    label='C'    blackText color={colors.lightGray}/>
                <CaculatorScreen onPress={() => toggleSign()}  label='+/-'  blackText color={colors.lightGray}/>
                <CaculatorScreen onPress={() => deleteOperation()}  label='del'  blackText color={colors.lightGray}/>
                <CaculatorScreen onPress={() => divideOperation()}    label='÷'    blackText color={colors.orange}/>
           
           </View>

            {/* esta es la segunda fila */}
            <View style={GlobalStyles.row}>

                <CaculatorScreen onPress={() => buildNumber("7")} label='7'/>
                <CaculatorScreen onPress={() => buildNumber("8")} label='8'/>
                <CaculatorScreen onPress={() => buildNumber("9")} label='9'/>
                <CaculatorScreen onPress={() => multipliOperation()} label='x' color={colors.orange}/>
           
           </View>

            {/* esta es la tercera fila */}
            <View style={GlobalStyles.row}>

                <CaculatorScreen onPress={() => buildNumber("4")} label='4'/>
                <CaculatorScreen onPress={() => buildNumber("5")} label='5'/>
                <CaculatorScreen onPress={() => buildNumber("6")} label='6'/>
                <CaculatorScreen onPress={() => subtractOperation()} label='-' color={colors.orange}/>
        
           </View>

            {/* esta es la cuarta fila */}
            <View style={GlobalStyles.row}>
              
                <CaculatorScreen onPress={() => buildNumber("1")} label='1'/>
                <CaculatorScreen onPress={() => buildNumber("2")} label='2'/>
                <CaculatorScreen onPress={() => buildNumber("3")} label='3'/>
                <CaculatorScreen onPress={() => addOperation()} label='+' color={colors.orange}/>
        
           </View>


            {/* esta es la quinta fila */}
            <View style={GlobalStyles.row}>
        
                <CaculatorScreen onPress={() => buildNumber("0")} label='0' doubleSize/>
                <CaculatorScreen onPress={() => buildNumber(".")} label='.'/>
                <CaculatorScreen onPress={() => calculateResult()} label='=' color={colors.orange}/>
        
           </View>
           
           
    </View>
  )
}
