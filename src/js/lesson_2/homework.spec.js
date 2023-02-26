import { christmasTree, reverseSort } from './homework';

describe('Validating christmasTree() function', () => {
  test('returns number tree when argument is valid', () => {
    expect(christmasTree(6)).toMatch(/^\s{5}0\s{5}\n[\s\S]*/);
    expect(christmasTree(3)).toMatch(/\n2\s2\s2$/);
    expect(christmasTree(4)).toMatch(/\n\s{2}1\s1\s{2}\n[\s\S]*$/);
  });

  test.each`
    input
    ${0}
    ${2.2}
    ${11}
    ${-7}
    ${4}
  `(
    'throws when input value $input is not an integer number in [1, 10]',
    (input) => {
      expect(() => christmasTree(input)).toThrowError(
        /Argument '.*' is invalid, expected positive integer from 1 to 10/i
      );
    }
  );

  test('throws on implicit undefined', () => {
    expect(() => christmasTree()).toThrowError(
      /Argument '.*' is invalid, expected positive integer from 1 to 10/i
    );
  });
});

xdescribe('Validating reverseSort() function:', () => {
  beforeAll(() => {
    let sortSpyFn = jest.spyOn(Array.prototype, 'sort');
    expect(sortSpyFn).not.toBeCalled();
  });

  test.each`
    input                   | expected
    ${[5, 9.1, 8.0, 2]}     | ${[9.1, 8, 5, 2]}
    ${[-4, -9, 12, 999.99]} | ${[999.99, 12, -4, -9]}
    ${[1]}                  | ${[1]}
  `('$input should be $expected, without mutation', ({ input, expected }) => {
    expect(reverseSort(input)).toMatchObject(expected);
  });

  test("doesn't mutate the source array", () => {
    const source = [1, 2, 3, 4, 5];
    const copy = [...source];
    reverseSort(source);
    expect(source).toMatchObject(copy);
  });

  test.each`
    input
    ${undefined}
    ${null}
    ${'some_string'}
    ${100}
    ${{ parameter: 'value' }}
  `('throws if $input is used as input', ({ input }) => {
    expect(() => reverseSort(input)).toThrowError(
      /argument '.*' is not an array, expected to be an array of numbers/i
    );
  });

  test.each`
    input
    ${[undefined]}
    ${[1, 2, {}, 3]}
    ${[1, 3, 'OK']}
  `(
    'throws if at least one of the elements from $input is not a number and cannot be coerced to number',
    ({ input }) => {
      expect(() => reverseSort(input)).toThrowError(
        /element '.*' cannot be coerced to number \/ is NaN, expected to be a number/i
      );
    }
  );
});
