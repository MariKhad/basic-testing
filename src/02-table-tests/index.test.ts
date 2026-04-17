// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

  const testCases = [
    { a: 5, b: -3, action: Action.Add, expected: 2 },
    { a: 10, b: 4, action: Action.Subtract, expected: 6 },
    { a: 2, b: 3, action: Action.Multiply, expected: 6 },
    { a: 6, b: 3, action: Action.Divide, expected: 2 },
    { a: 6, b: 2, action: Action.Exponentiate, expected: 36 },
    { a: undefined, b: 3, action: 'pow', expected: null },
    { a: undefined, b: 3, action: Action.Add, expected: null },
  ];

  testCases.forEach(({ a, b, action, expected }) => {
    test(`should return ${expected} for ${action} with a=${a}, b=${b}`, () => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    });
  });
