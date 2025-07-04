import { useEffect, useRef, useState } from 'react'

enum Operator {
     add = '+',
     subtract = '-',
     multiply = 'x',
     divide = '÷'
}
export const useCalculator = () => {
    
    const [formula,setFormula] = useState('');

    const [ numberInitial,setNumberInitial] = useState('0');
    const [ prevNumber, setPrevNumber] = useState('0');
    
    const lastOperation = useRef<Operator>();

    useEffect(() => {
        
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${numberInitial}`)
        }else{
            setFormula(numberInitial);
        }
        
        
    },[numberInitial])


    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`);
    },[formula])

    //Esto es para limpiar
    const clean = () => {
        setNumberInitial('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
        setFormula('');
    }


    //borrar el ultimo numero
    const deleteOperation = () => {

        let currentSign = '';
        let temporalNumber = numberInitial;

        if(numberInitial.includes('-')){
            currentSign = '-';
            temporalNumber = numberInitial.substring(1);
        }

        if(temporalNumber.length > 1){
            return  setNumberInitial(temporalNumber.slice(0,-1));
        }

        setNumberInitial('0');
    }


    const toggleSign = () => {

        if(numberInitial.includes('-')){
           return setNumberInitial(numberInitial.replace('-',''));
        }

        setNumberInitial('-' + numberInitial)
    }


    const buildNumber = (numberString:string) => {
        
        //logica para la validaciones del punto
        // si incluye punto y number string es un punto return vacio
        //solo un punto decimal
        if(numberInitial.includes('.') && numberString ==='.'){
            return;
        }


        //si el numero inicial empieza con 0 o -0
        // el numberstring es un PUNTO
        if(numberInitial.startsWith('0') || numberInitial.startsWith('-0')){
            
            
        /* un punto decimal */
        if(numberString ==='.'){
            return setNumberInitial(numberInitial + numberString);
        }

        //evaluar si es otro cero y no hay punto
        if(numberString ==='0' && numberString.includes('.')){
            return setNumberInitial(numberInitial+ numberString);
        }



        // evaluar si es diferente de cero, no hay punto, y es el primer numero
        if(numberString !=='0' && !numberInitial.includes('.')){
            return setNumberInitial(numberString);
        }



        //evitar 00000.00
        if(numberString === '0' && !numberInitial.includes('.')){
            return
        }

            return setNumberInitial(numberInitial + numberString);

        }
        
            setNumberInitial(numberInitial + numberString)
    }


    const setLastNumber = () => {
        calculateResult();
        if(numberInitial.endsWith('.')){
            setPrevNumber(numberInitial.slice(0,-1));
        }else{
            setPrevNumber(numberInitial);
        }

        setNumberInitial('0')
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multipliOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }


    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }


    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }


    //calculamos el resultado
    const calculateResult = () => {
      const result =  calculateSubResult();
      setFormula(`${result}`);
        
      lastOperation.current = undefined;
      setPrevNumber('0');
    }

    const calculateSubResult = ():number => {

        const [firstValue, operation,secondValue] = formula.split(' ');


        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if(isNaN(num2))return num1;

        switch(operation){
        
            case Operator.add:
                return num1 + num2;
            

            case Operator.subtract:
                return num1 - num2;
            

            case Operator.multiply:
                return num1 * num2;
            

            case Operator.divide:
                return num1 / num2;
            

            default:
                throw new Error('Operation not implemented')
        }
    }

    return {
        //properties
        numberInitial,
        prevNumber,
        formula,
        //method
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        //operation
        divideOperation,
        multipliOperation,
        subtractOperation,
        addOperation,
        calculateResult
    } 
}

