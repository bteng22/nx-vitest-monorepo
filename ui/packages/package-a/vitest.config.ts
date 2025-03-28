import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    timeout: 20000,
    globals: true
  }
});