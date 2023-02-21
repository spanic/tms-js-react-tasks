import { User } from './homework';

xdescribe('Validating comparator functions', () => {
  let first, second;

  beforeAll(() => {
    first = new User(12452, 'Siarhei');
    second = new User(42319, 'Anatol');
  });

  // I need this because of https://jestjs.io/docs/troubleshooting#defining-tests and https://github.com/facebook/jest/issues/7100
  function getFirstUser() {
    return first;
  }

  function getSecondUser() {
    return second;
  }

  test.each`
    getFirst         | getSecond        | expected
    ${getFirstUser}  | ${getSecondUser} | ${/object 1 is less than Object 2: id .* < .*/i}
    ${getFirstUser}  | ${getFirstUser}  | ${/object 1 is equal to Object 2: id .* == .*/i}
    ${getSecondUser} | ${getFirstUser}  | ${/object 1 is greater than Object 2: id .* > .*/i}
  `(
    'works when Users are compared by id using compareById()',
    ({ getFirst, getSecond, expected }) => {
      expect(getFirst().compareById(getSecond())).toMatch(expected);
    }
  );

  test.each`
    getFirst         | getSecond        | expected
    ${getFirstUser}  | ${getSecondUser} | ${/object 1 is less than Object 2: name length .* > .*/i}
    ${getFirstUser}  | ${getFirstUser}  | ${/object 1 is equal to Object 2: name length .* == .*/i}
    ${getSecondUser} | ${getFirstUser}  | ${/object 1 is greater than Object 2: name length .* < .*/i}
  `(
    'works when Users are compared by name using compareByNameLength()',
    ({ getFirst, getSecond, expected }) => {
      expect(getFirst().compareByNameLength(getSecond())).toMatch(expected);
    }
  );
});
