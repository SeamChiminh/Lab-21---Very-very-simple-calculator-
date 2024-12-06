let display = document.getElementById('display');
    let number1 = null;
    let operator = null;
    let number2 = null;

    function Number(num) {
      if (operator === null) {
        number1 = (number1 === null) ? num.toString() : number1 + num.toString();
        updateDisplay(number1);
      } else {
        number2 = (number2 === null) ? num.toString() : number2 + num.toString();
        updateDisplay(number2);
      }
    }

    function Operator(op) {
      if (number1 !== null) {
        operator = op;
        updateDisplay(op);
      }
    }

    function appendDot() {
      if (operator === null) {
        if (!number1 || !number1.includes('.')) {
          number1 = (number1 === null) ? '0.' : number1 + '.';
          updateDisplay(number1);
        }
      } else {
        if (!number2 || !number2.includes('.')) {
          number2 = (number2 === null) ? '0.' : number2 + '.';
          updateDisplay(number2);
        }
      }
    }

    function calculate() {
  if (number1 !== null && operator !== null && number2 !== null) {
    let result;
    const n1 = parseFloat(number1);
    const n2 = parseFloat(number2);

    if (operator === '+') {
      result = n1 + n2;
    } else if (operator === '-') {
      result = n1 - n2;
    } else if (operator === '*') {
      result = n1 * n2;
    } else if (operator === '/') {
      if (n2 !== 0) {
        result = n1 / n2;
      } else {
        result = 'Error (Div by 0)';
        clearAllExceptDisplay(); 
        updateDisplay(result);
        return;
      }
    }

    updateDisplay(result);
    number1 = result.toString();
    operator = null;
    number2 = null;
  } else {
    updateDisplay('Incomplete Input');
  }
}


    function clearDisplay() {
      clearAll();
      updateDisplay(0);
    }

    function updateDisplay(content) {
      display.innerText = content;
    }

    function clearAll() {
      number1 = null;
      operator = null;
      number2 = null;
    }

    function clearAllExceptDisplay() {
      operator = null;
      number2 = null;
    }