const assert = require('node:assert');
const test = require('node:test');

const {
  add,
  subtract,
  multiply,
  divide,
  operationHistory,
  clearHistory,
} = require('./index.js');

test('add returns the sum and records the operation', () => {
  clearHistory();
  const result = add(2, 3);
  assert.strictEqual(result, 5);
  assert.deepStrictEqual(operationHistory[operationHistory.length - 1], {
    operands: [2, 3],
    operator: '+',
    answer: 5,
  });
});

test('subtract returns the difference', () => {
  clearHistory();
  const result = subtract(10, 4);
  assert.strictEqual(result, 6);
});

test('multiply returns the product', () => {
  clearHistory();
  const result = multiply(3, 4);
  assert.strictEqual(result, 12);
});

test('divide returns the quotient', () => {
  clearHistory();
  const result = divide(20, 5);
  assert.strictEqual(result, 4);
});

test('divide throws when dividing by zero', () => {
  clearHistory();
  assert.throws(() => divide(8, 0), /Denominator cannot be zero/);
});
