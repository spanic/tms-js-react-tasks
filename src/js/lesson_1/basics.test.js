import { factorial } from './basics';

describe('Validating factorial() function', () => {
  test('calculates factorial', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3_628_800);
    expect(factorial(25)).toBe(15_511_210_043_330_985_984_000_000);
  });
});
