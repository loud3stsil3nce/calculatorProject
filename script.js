const calculatorBody = document.querySelector('#calculator');

function add(num1 , num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1 , num2) {
    let difference = num1 - num2;
    return difference;
}

function multiply(num1 , num2) {
    let product = num1 * num2;
    return product;
}

function divide(num1 , num2) {
    let quotient = num1 / num2;
    return quotient;
}



let number1 = '';
let number2 = '';
let operator = '';



function operate (operator, number1, number2) {
    switch (operator) {
    case '+':
    return add(number1, number2);
    break;
    case '-':
    return subtract(number1, number2);
    break;
    case '*':
    return multiply(number1, number2);
    break;
    case '/':
    return divide(number1, number2);
    }
    }