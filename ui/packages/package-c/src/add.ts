export function add(...args: number[]): number {
  return args.reduce((sum, current) => sum + current, 0);
}