// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by 0!";
    }
    return a / b;
}

// Operate function
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null;
    }
}

// Example variables for testing
let num1 = 3;
let num2 = 5;
let operator = '+';

// Testing the operate function
console.log(operate(operator, num1, num2)); // Should return 8

// Variables to hold the current input
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

// Select display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
    display.textContent = value;
}

// Function to handle number button clicks
function handleNumberClick(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

// Function to handle operator button clicks
function handleOperatorClick(operator) {
    if (currentInput === '') return; // Prevent operator click if input is empty
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperator) {
        secondOperand = parseFloat(currentInput);
        firstOperand = operate(currentOperator, firstOperand, secondOperand);
    }
    currentOperator = operator;
    currentInput = '';
    updateDisplay(firstOperand);
}

// Function to handle equals button click
function handleEqualsClick() {
    if (currentInput === '' || firstOperand === null || currentOperator === null) return;
    secondOperand = parseFloat(currentInput);
    const result = operate(currentOperator, firstOperand, secondOperand);
    updateDisplay(result);
    // Reset for the next calculation
    currentInput = '';
    firstOperand = result;
    currentOperator = null;
}

// Function to handle clear button click
function handleClearClick() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    updateDisplay('0');
}

// Add event listeners to buttons
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => handleNumberClick(button.value));
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => handleOperatorClick(button.value));
});

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', handleEqualsClick);

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', handleClearClick);
