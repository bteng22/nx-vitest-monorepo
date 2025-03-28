import { test, expect, vi, type Mock } from 'vitest';
import { add } from '../src/add';
import { multiply } from '../src/index';

// Package-c is able to mock with relative paths just fine!
vi.mock('../src/add', () => ({
  add: vi.fn(),
}));

test('multiplies two numbers correctly using mocked add', () => {
  console.log('??add', add);
  (add as Mock).mockImplementation((...args: number[]) => args.reduce((sum, num) => sum + num, 0));

  expect(multiply(2, 3)).toBe(6); // 2 + 2 + 2 = 6
  expect(multiply(-2, 3)).toBe(-6); // -2 + -2 + -2 = -6
  expect(multiply(0, 5)).toBe(0); // 0 + 0 + 0 + 0 + 0 = 0

  expect(add).toHaveBeenCalledWith(2, 2, 2);
  expect(add).toHaveBeenCalledWith(-2, -2, -2);
  expect(add).toHaveBeenCalledWith(0, 0, 0, 0, 0);
});