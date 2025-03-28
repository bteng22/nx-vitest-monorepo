import { test, expect } from 'vitest';
import { add } from '../src/index';

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(0);
});