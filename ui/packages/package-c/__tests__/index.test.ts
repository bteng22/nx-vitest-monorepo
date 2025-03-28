import { test, expect } from 'vitest';
import { divide } from '../src/index';

test('divides two numbers correctly', () => {
  expect(divide(6, 2)).toBe(3);
  expect(divide(-6, 2)).toBe(-3);
  expect(divide(0, 5)).toBe(0);
  expect(() => divide(5, 0)).toThrow('Division by zero');
});