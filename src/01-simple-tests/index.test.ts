// Uncomment the code below and write your tests
// import { simpleCalculator, Action } from './index';

import { Action, simpleCalculator } from "01-simple-tests";

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator({ a: 5, b: -3, action: Action.Add })).toBe(2);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator({ a: 10, b: 4, action: Action.Subtract })).toBe(6);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Multiply })).toBe(6);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 3, action: Action.Divide })).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator({ a: 6, b: 2, action: Action.Exponentiate })).toBe(36);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator({ a: undefined, b: 3, action: 'pow' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: undefined, b: 3, action: Action.Add })).toBeNull();
  });
});
