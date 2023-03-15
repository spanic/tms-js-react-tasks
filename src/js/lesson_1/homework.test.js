import { factorial, greetAndConfirm } from './homework';

xdescribe('Validating factorial() function', () => {
  test('calculates factorial when input is a number', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3_628_800);
    expect(factorial(25)).toBe(15_511_210_043_330_985_984_000_000);
  });

  test('calculates factorial when input is a value number-like value', () => {
    expect(factorial('5')).toBe(120);
    expect(factorial(1 + '0')).toBe(3_628_800);
    expect(factorial(true + 1)).toBe(2);
  });

  test('throws when input value is NaN', () => {
    expect(() => factorial(NaN)).toThrowError(
      /argument '.*' cannot be converted to number, please check the inputs/i
    );
  });

  test('throws when input value cannot be coerced to Number', () => {
    expect(() => factorial('number')).toThrowError(
      /argument '.*' cannot be converted to number, please check the inputs/i
    );
  });

  test('throws on explicit undefined input value', () => {
    expect(() => factorial(undefined)).toThrowError(
      /argument '.*' cannot be converted to number, please check the inputs/i
    );
  });

  test('throws on implicit undefined input value', () => {
    expect(() => factorial()).toThrowError(
      /argument '.*' cannot be converted to number, please check the inputs/i
    );
  });

  test('throws when input value is < 0', () => {
    expect(() => factorial(-1)).toThrowError(
      /value '.*' is less than 0, expected to be positive/i
    );
  });

  test('throws when input value is float', () => {
    expect(() => factorial(5.01)).toThrowError(
      /value '.*' is float, expected integer/i
    );
  });

  test('calculates factorial even if input number has some precision loss', () => {
    expect(factorial(4.0000000000000001)).toBe(24);
  });
});

xdescribe('Validating greetAndConfirm() function', () => {
  test('works when user enters and confirms their name', () => {
    const promptSpyFn = jest.spyOn(window, 'prompt').mockReturnValue('Andrew');
    const confirmSpyFn = jest.spyOn(window, 'confirm').mockReturnValue(true);
    expect(greetAndConfirm()).toBe('Andrew');
    expect(promptSpyFn).toHaveBeenCalled();
    expect(confirmSpyFn).toHaveBeenCalled();
  });

  test('works when user enters and declines their name', () => {
    const promptSpyFn = jest
      .spyOn(window, 'prompt')
      .mockReturnValue('Andrew')
      .mockReturnValueOnce('Mariia');
    const confirmSpyFn = jest
      .spyOn(window, 'confirm')
      .mockReturnValue(true)
      .mockReturnValueOnce(false);
    expect(greetAndConfirm()).toBe('Andrew');
    expect(promptSpyFn).toHaveBeenCalledTimes(2);
    expect(confirmSpyFn).toHaveBeenCalledTimes(2);
  });

  test('throws when user enters empty name', () => {
    const promptSpyFn = jest.spyOn(window, 'prompt').mockReturnValue('');
    const confirmSpyFn = jest.spyOn(window, 'confirm');
    expect(() => greetAndConfirm()).toThrowError(/provided empty name/i);
    expect(promptSpyFn).toHaveBeenCalled();
    expect(confirmSpyFn).not.toHaveBeenCalled();
  });
});
