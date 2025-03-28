import { add } from '@ui/package-a'

export function multiply(a: number, b: number): number {
  const sum = add(...Array(b).fill(a)); // Add 'a' to itself 'b' times
  return sum;
}