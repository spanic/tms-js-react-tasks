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
  if (!Number.isInteger(height) || height < 1 || height > 11) {
    throw new Error(
      `Argument '${height}' is invalid, expected positive integer from 1 to 10`
    );
  }
  for (let i = 0; i < height; i++) {
    tree += ' '.repeat(height - 1 - i) + `${i}`;
    for (let k = 1; k <= i; k++) {
      tree += ` ${i}`;
    }
    tree += ' '.repeat(height - 1 - i);
    if (i < height - 1) {
      tree += '\n';
    }
  }
  return tree;
}

//   const number = height;
//   const space = ' ';

//   if (Number.isInteger(number) && number > 0 && number < 11) {
//     switch (number) {
//     case 1:
//       console.log(`${space} 1 ${space}`);
//       break;
//     case 2:
//       console.log(`
//         ${space}1${space}\n
//         2${space}2$
//         `);
//       break;
//     case 3:
//       console.log(`
//           ${space}${space}1${space}${space}\n
//           ${space}2${space}2${space}\n
//           3${space}3${space}3
//           `);
//       break;
//     case 4:
//       console.log(`
//             ${space}${space}${space}1${space}${space}${space}\n
//             ${space}${space}2${space}2${space}${space}\n
//             ${space}3${space}3${space}3${space}\n
//             4${space}4${space}4${space}4
//             `);
//       break;
//     case 5:
//       console.log(`
//         ${space}${space}${space}${space}1${space}${space}${space}${space}\n
//         ${space}${space}${space}2${space}2${space}${space}${space}\n
//         ${space}${space}3${space}3${space}3${space}${space}\n
//         ${space}4${space}4${space}4${space}4${space}\n
//         5${space}5${space}5${space}5${space}5
//         `);
//       break;
//     case 6:
//       console.log(`
//         ${space}${space}${space}${space}${space}1${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}2${space}2${space}${space}${space}${space}\n
//         ${space}${space}${space}3${space}3${space}3${space}${space}${space}\n
//         ${space}${space}4${space}4${space}4${space}4${space}${space}\n
//         ${space}5${space}5${space}5${space}5${space}5${space}\n
//         6${space}6${space}6${space}6${space}6${space}6
//         `);
//       break;
//     case 7:
//       console.log(`
//         ${space}${space}${space}${space}${space}${space}1${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}2${space}2${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}3${space}3${space}3${space}${space}${space}${space}\n
//         ${space}${space}${space}4${space}4${space}4${space}4${space}${space}${space}\n
//         ${space}${space}5${space}5${space}5${space}5${space}5${space}${space}\n
//         ${space}6${space}6${space}6${space}6${space}6${space}6${space}\n
//         7${space}7${space}7${space}7${space}7${space}7${space}7
//         `);
//       break;
//     case 8:
//       console.log(`
//         ${space}${space}${space}${space}${space}${space}${space}1${space}${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}${space}2${space}2${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}3${space}3${space}3${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}4${space}4${space}4${space}4${space}${space}${space}${space}\n
//         ${space}${space}${space}5${space}5${space}5${space}5${space}5${space}${space}${space}\n
//         ${space}${space}6${space}6${space}6${space}6${space}6${space}6${space}${space}\n
//         ${space}7${space}7${space}7${space}7${space}7${space}7${space}7${space}\n
//         8${space}8${space}8${space}8${space}8${space}8${space}8${space}8
//         `);
//       break;
//     case 9:
//       console.log(`
//         ${space}${space}${space}${space}${space}${space}${space}${space}1${space}${space}${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}${space}${space}2${space}2${space}${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}${space}3${space}3${space}3${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}4${space}4${space}4${space}4${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}5${space}5${space}5${space}5${space}5${space}${space}${space}${space}\n
//         ${space}${space}${space}6${space}6${space}6${space}6${space}6${space}6${space}${space}${space}\n
//         ${space}${space}7${space}7${space}7${space}7${space}7${space}7${space}7${space}${space}\n
//         ${space}8${space}8${space}8${space}8${space}8${space}8${space}8${space}8${space}\n
//         9${space}9${space}9${space}9${space}9${space}9${space}9${space}9${space}9
//         `);
//       break;
//     case 10:
//       console.log(`
//         ${space}${space}${space}${space}${space}${space}${space}${space}${space}${space}1${space}${space}${space}${space}${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}${space}${space}${space}${space}2${space}${space}2${space}${space}${space}${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}${space}${space}${space}3${space}${space}3${space}${space}3${space}${space}${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}${space}${space}4${space}${space}4${space}${space}4${space}${space}4${space}${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}${space}5${space}${space}5${space}${space}5${space}${space}5${space}${space}5${space}${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}${space}6${space}${space}6${space}${space}6${space}${space}6${space}${space}6${space}${space}6${space}${space}${space}${space}${space}\n
//         ${space}${space}${space}${space}7${space}${space}7${space}${space}7${space}${space}7${space}${space}7${space}${space}7${space}${space}7${space}${space}${space}${space}\n
//         ${space}${space}${space}8${space}${space}8${space}${space}8${space}${space}8${space}${space}8${space}${space}8${space}${space}8${space}${space}8${space}${space}${space}\n
//         ${space}${space}9${space}${space}9${space}${space}9${space}${space}9${space}${space}9${space}${space}9${space}${space}9${space}${space}9${space}${space}9${space}${space}\n
//         10${space}10${space}10${space}10${space}10${space}10${space}10${space}10${space}10${space}10
//         `);
//       break;
//     default:
//       break;
//     }
//   } else {
//     throw new Error(
//       `Argument '${number}' is invalid, expected positive integer from 1 to 10`
//     );
//   }
// }
// christmasTree(6);

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
  if (Array.isArray(array)) {
    throw new Error(
      `Argument '${array}' is not an array, expected to be an array of numbers`
    );
  }
  // if (array.every(element => {
  //   return typeof element !== 'number';
  // })){
  //   throw new Error(
  //     `Element '${array}' cannot be coerced to number / is NaN, expected to be a number`
  //   );
  // }
  function checkIsNumber(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new Error(
        `Element '${value}' cannot be coerced to number / is NaN, expected to be a number`
      );
    }
  }
  if (checkIsNumber(array) === true) {
    throw new Error(
      `Element '${array}' cannot be coerced to number / is NaN, expected to be a number`
    );
  }

  // let numArrReversed = array.map(array.pop, [...array]);
  const copy = [...array].map(array.pop, array);
  return copy;
}

export { christmasTree, reverseSort };
