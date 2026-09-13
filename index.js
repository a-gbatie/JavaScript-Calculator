//Basic Operation History - Using array to store calulation object
// Each calulation object will have the following structure:
// Operands: (2 numbers) - [a, b]
// Operator: (+. -. *, /)
// Answer: (number) - x

const operationHistory = [];
let result = 0;

//Basic Calculator Functions - Add, Subtract, Multiply, Divide
function add(a, b) {
    result = a + b;
    operationHistory.push({ operands: [a, b], operator: '+', answer: result})
    return result;
}

function subtract(a, b) {
    result = a - b;
    operationHistory.push({ operands: [a, b], operator: '-', answer: result})
    return result;
}

function multiply(a, b) {
    result = a * b;
    operationHistory.push({ operands: [a, b], operator: '*', answer: result})
    return result;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Denominator cannot be zero");
    }
    result = a / b;
    operationHistory.push({ operands: [a, b], operator: '/', answer: result})
    return result;
}

//Future Feature - Clear History
function clearHistory() {
    operationHistory.length = 0;
}

//Run code
add(2, 3);
subtract(10, 4);
multiply(3, 4);
divide(20, 5);
console.log('History: ', operationHistory);

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operationHistory,
    clearHistory,
};
