/**
 * Функция должна возвращать значение факториала для заданного числа number.
 * Необходимо также реализовать проверку переданного параметра:
 *
 * Если передано значение, которое приводится к числу как NaN, нужно завершить выполнение функции с ошибкой:
 * ``` throw new Error('Argument '{значение_аргумента}' cannot be converted to number, please check the inputs'); ```
 *
 * Если передано отрицательное число, нужно завершить выполнение функции с ошибкой:
 * ``` throw new Error('Value '{значение_аргумента}' is less than 0, expected to be positive'); ```
 *
 * Если передано дробное число, нужно завершить выполнение функции с ошибкой:
 * ``` throw new Error('Value '{значение_аргумента}' is float, expected integer'); ```
 *
 * @param {number} number - value to calculate factorial for
 * @return {number} the factorial value
 */
function factorial(number) {
  if (isNaN(number)) {
    throw new Error(
      `Argument '${number}' cannot be converted to number, please check the inputs`
    );
  }
  const nummber = Number(number);
  if (nummber < 0) {
    throw new Error(
      `Value '${nummber}' is less than 0, expected to be positive`
    );
  }
  if (!Number.isInteger(nummber)) {
    throw new Error(`Value '${nummber}' is float, expected integer`);
  }
  if (nummber === 0) {
    return 1;
  } else {
    return nummber * factorial(nummber - 1);
  }
}

/**
 * Функция должна возвращать строку (имя), введенное пользователем в окно ``` prompt() ```.
 *
 * После ввода имени в поле, необходимо вызвать функцию ``` confirm() ```. Если пользователь нажмет OK, то завершить выполнение функции.
 * Если пользователь нажмет Cancel, то начать выполнение фунции с начала.
 *
 * Если пользователь введет пустую строку в окно ``` prompt() ```, завершить выполнение функции с ошибкой
 * ``` throw new Error('Provided empty name') ```
 *
 * @return {string} entered name
 */
function greetAndConfirm() {
  while (true) {
    const name = prompt('Please enter your name:');
    if (!name) {
      throw new Error('Provided empty name');
    }
    const confirmed = confirm(`Is "${name}" your name?`);
    if (confirmed) {
      return name;
    } else {
      continue;
    }
  }
}

function onClick() {}

export { factorial, onClick, greetAndConfirm };
