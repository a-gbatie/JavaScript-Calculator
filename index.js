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

if (require.main === module) {
    console.log('History: ', operationHistory);
}

//Future Feature - Clear History
function clearHistory() {
    operationHistory.length = 0;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operationHistory,
    clearHistory,
};
