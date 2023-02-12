import { sum } from './sum';

describe('Validating sum() function', () => {
  test('works fine with numbers and/or convertible data', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, '+2.3', '-3', '3')).toBe(3.3);
    expect(sum(0)).toBe(0);
    expect(sum(true, false)).toBe(1);
    expect(sum(null, '0', -10.99)).toBe(-10.99);
  });

  test('throws with no agruments', () => {
    expect(() => sum()).toThrowError(/please add at least one argument/i);
  });

  test('throws with non-convertible values', () => {
    [
      expect(() => sum(undefined)),
      expect(() => sum(null)),
      expect(() => sum(1, 'UH%42', 3)),
    ].every((value) =>
      value.toThrowError(
        /^argument '.*' cannot be converted to number, please check the inputs$/i
      )
    );
  });
});
