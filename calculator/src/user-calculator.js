import  { useState } from "react";

export const UseCalculator = () => {
    const [input, setInput] = useState(0);
    const [currentOperator, setCurrentOperator] = useState(null);
    const [result, setResult] = useState(null);
    const [tmpInput, setTmpInput] = useState(null);
    const [tmpOperator, setTmpOperator] = useState(null);
    const [isClickedOperator, setIsClickedOperator] = useState(false);
    const [isClickedEqaul, setIsClickedEqaul] = useState(false);
    const hasInput = !!input;

    const onPressReset = () => {
        if (hasInput){
            setInput(0);
        }
        else{
            setInput(0);
            setCurrentOperator(null);
            setResult(null);
            setTmpInput(null);
            setTmpOperator(null);
        }
        
    }

    const onPressNum = (num) => {
        if (currentOperator && isClickedOperator){
            setResult(input);
            setInput(num);
            setIsClickedOperator(false);
        }
        else{
            const newInput = Number(String(input) + String(num));
            setInput(newInput);
        }
    }

    const onPressOperator = (operator) => {
        if (operator !== '='){
            setCurrentOperator(operator)
            setIsClickedOperator(true);
            setIsClickedEqaul(false);
        }
        else{            
            let finalResult = result;
            const finalInput = isClickedEqaul ? tmpInput : input;
            const finalOperator = isClickedEqaul ? tmpOperator : currentOperator;
            switch(finalOperator){
                case '+':
                    finalResult = result + finalInput;
                    break;
                case '-':
                    finalResult = result - finalInput;
                    break;
                case '*':
                    finalResult = result * finalInput;
                    break;
                case '/':
                    finalResult = result / finalInput;
                    break;

                default:
                    break;
            }

            setResult(finalResult);
            setInput(finalResult);
            setTmpInput(finalInput);
            setTmpOperator(finalOperator);
            setCurrentOperator(null);
            setIsClickedEqaul(true);
        }
    }

    return {
        input,
        currentOperator,
        result,
        tmpInput,
        tmpOperator,
        onPressNum,
        onPressOperator,
        onPressReset,
        hasInput 
    }

}