import { add } from './add';

export function multiply(a: number, b: number): number {
  const sum = add(...Array(b).fill(a));
  return sum;
}