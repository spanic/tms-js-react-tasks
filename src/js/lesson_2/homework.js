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
  let tree = '';

  if (
    typeof height !== 'number' ||
    height % 1 !== 0 ||
    height < 1 ||
    height > 10
  ) {
    throw new Error(
      `Argument '${height}' is invalid, expected positive integer from 1 to 10`
    );
  } else {
    for (let i = 0; i < height; i++) {
      tree += ' '.repeat(height - 1 - i) + `${i}`;
      for (let k = 1; k <= i; k++) {
        tree += ` ${i}`;
      }
      tree += ' '.repeat(height - 1 - i) + '\n';
    }
  }
  console.log(tree);
  return tree;
}

christmasTree(3);
export { christmasTree };
