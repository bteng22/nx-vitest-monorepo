import { test, expect } from 'vitest';
import { multiply } from '../src/index';

test('multiplies two numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-2, 3)).toBe(-6);
  expect(multiply(0, 5)).toBe(0);
});