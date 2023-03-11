/**
 * Функция должна возвращать строку, содержащую равносторонний треугольник из чисел, подобный представленному ниже.
 *
 * Реализуйте проверку параметра ``` number ```:
 * если аргумент функции не принадлежит множеству натуральных чисел в отрезке [1, 10], нужно завершить выполнение функции с ошибкой:
 * ``` throw new Error('Argument '{значение_аргумента}' is invalid, expected positive integer from 1 to 10'); ```
 *
 * Подсказки:
 * 1. Длина каждой строки одинакова и линейно зависит от параметра height
 * 2. Для перевода строки в конце добавьте символ ``` "\n" ```
 * 3. Индекс первого числа в каждой строке ``` n ``` будет равен половине длины строки - ``` n ```
 * 4. Индексы чисел в строке зависят от четности индекса первого числа в строке
 *
 * @example
 *    0
 *   1 1
 *  2 2 2
 * 3 3 3 3
 * @param {number} height total number of rows (i. e. height of the tree)
 */
function christmasTree(height) {
  if (!Number.isInteger(height) || height < 1 || height > 10) {
    throw new Error(
      `Argument '${height}' is invalid, expected positive integer from 1 to 10`
    );
  }

  let tree = '';

  const rowLength = 2 * height - 1;

  for (let i = 0; i < height; i++) {
    const firstNumberPosition = (rowLength - 1) / 2 - i;
    for (let j = 0; j < rowLength; j++) {
      if (
        j >= firstNumberPosition &&
        j % 2 === firstNumberPosition % 2 &&
        j < rowLength - firstNumberPosition
      ) {
        tree += i;
      } else {
        tree += ' ';
      }
    }
    if (i < height - 1) {
      tree += '\n';
    }
  }
  return tree;
}

/**
 * Функция должна возвращать копию исходного массива, содержащего только числа, отсортированную в порядке убывания (от большего к меньшему).
 * __Внимание__: в рамках данной задачи нельзя использовать фунции ``` Array.prototype.sort() ``` и ``` Array.prototype.reverse() ```
 *
 * Реализуйте проверку параметра ``` array ```:
 *
 * если аргумент функции не является массивом, нужно завершить выполнение функции с ошибкой:
 * ``` throw new Error('Argument '{значение_аргумента}' is not an array, expected to be an array of numbers'); ```
 *
 * если хотя бы один из элементов исходного массива не является числом / равен NaN, нужно завершить выполнение фунции с ошибкой:
 * ``` throw new Error('Element '{значение_элемента}' cannot be coerced to number / is NaN, expected to be a number'); ```
 *
 * Подсказки:
 * 1. Для создания копии массива используйте ``` const copy = [...input]; ```
 * 2. Для проверки входного параметра используйте ``` Array.isArray(input); ```
 * 3. Для проверки типа данных элементов используйте предоставленную вложенную функцию
 *
 * @example
 * [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]
 *
 * @param {array} array array of numbers
 * @returns {array} copy of the input array, sorted in reverse order
 */
function reverseSort(array) {
  // Проверяем, что аргумент является массивом
  if (!Array.isArray(array)) {
    throw new Error(
      `Argument '${array}' is not an array, expected to be an array of numbers`
    );
  }
  const clone = [...array];

  let sorted;
  do {
    sorted = true;
    for (let i = 0; i < clone.length; i++) {
      checkIsNumber(clone[i]);
      if (i === clone.length - 1) continue;
      checkIsNumber(clone[i + 1]);

      if (clone[i] < clone[i + 1]) {
        [clone[i], clone[i + 1]] = [clone[i + 1], clone[i]];
        sorted = false;
        break;
      }
    }
  } while (!sorted);

  function checkIsNumber(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error(
        `Element '${value}' cannot be coerced to number / is NaN, expected to be a number`
      );
    }
  }
  return clone;
}

export { christmasTree, reverseSort };
