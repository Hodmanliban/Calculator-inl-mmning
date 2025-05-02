import { test, expect } from 'vitest';
import { createCalculator } from '../lib/calculator.js';

test('adderar två tal', () => {
  const calculator = createCalculator();
  expect(calculator.add(2, 2)).toBe(4);
});

test('subtraherar två tal', () => {
  const calculator = createCalculator();
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplicerar två tal', () => {
  const calculator = createCalculator();
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('dividerar två tal', () => {
  const calculator = createCalculator();
  expect(calculator.divide(10, 2)).toBe(5);
});