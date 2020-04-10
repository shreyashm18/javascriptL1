const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function resetCalculator(){
    calculator.displayValue = '0',
    calculator.firstOperand = null,
    calculator.waitingForSecondOperand = false,
    calculator.operator = null
  };

  function inputDigit(digit) {
    //const { displayValue } = calculator;
    
    if (calculator.waitingForSecondOperand === true){
        
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    
    }
    else{
        calculator.displayValue = calculator.displayValue === '0' ? digit : calculator.displayValue + digit;
    }
  }

  function inputDecimal(decimal){
      if (!calculator.displayValue.includes(decimal)){
        calculator.displayValue += decimal;
      }
      console.log(calculator);
  }
  
  const calculations ={
      '+' : function(firstValue , secondValue){return (firstValue + secondValue)} ,
      '-' : function(firstValue , secondValue){return (firstValue - secondValue)} ,
      '*' : function(firstValue , secondValue){return (firstValue * secondValue)} ,
      '/' : function(firstValue , secondValue){return (firstValue / secondValue)} ,
      '=' : function(firstValue , secondValue){return firstValue}
  };

  function handleOperator(operator){
    if(calculator.operator && calculator.waitingForSecondOperand){
        calculator.operator = operator;
        console.log(calculator);
        return
    }
      input_value = parseInt(calculator.displayValue);
      if (calculator.firstOperand === null){
          calculator.firstOperand = input_value;
      }
      else if(calculator.operator ){
        console.log("from line no 176 calculator.firstOperand ",calculator.firstOperand);
          var result = calculations[calculator.operator](calculator.firstOperand , input_value);
         // console.log("from line no 177 result ",result);
          calculator.displayValue = String(result);
          calculator.firstOperand = result;
          //console.log("from line no 180 calculator.firstOperand ",calculator.firstOperand);
      }
      
      calculator.waitingForSecondOperand = true;
      calculator.operator = operator;
      console.log(calculator);
  } 

  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    //console.log('from line 70 display ',display);
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
    const  target  = event.target;
    if (!target.matches('button')) {
        return;
    }
    console.log('line 81 target.classList', target.classList);
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        //location.reload();
        console.log('clear', target.value);
        return;
    }
    inputDigit(target.value);
    updateDisplay();
    console.log('digit', target.value);
    });