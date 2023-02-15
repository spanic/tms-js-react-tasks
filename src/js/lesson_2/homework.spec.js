import { christmasTree } from './homework';

describe('Validating christmasTree() function', () => {
  test('returns number tree when argument is valid', () => {
    expect(christmasTree(6)).toMatch(/^\s{5}0\s{5}\n[\s\S]*/);
    expect(christmasTree(3)).toMatch(/\n2\s2\s2$/);
    expect(christmasTree(4)).toMatch(/\n\s{2}1\s1\s{2}\n[\s\S]*$/);
  });

  test('throws when argument is not an integer number in [1, 10]', () => {
    [
      expect(() => christmasTree(0)),
      expect(() => christmasTree(2.2)),
      expect(() => christmasTree(11)),
      expect(() => christmasTree(-7)),
      expect(() => christmasTree('4')),
    ].every((test) =>
      test.toThrowError(
        /Argument '.*' is invalid, expected positive integer from 1 to 10/i
      )
    );
  });

  test('throws on implicit undefined', () => {
    expect(() => christmasTree()).toThrowError(
      /Argument '.*' is invalid, expected positive integer from 1 to 10/i
    );
  });
});
