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
  if (isNaN(number)){
    throw new Error(`Argument '${number}' cannot be converted to number, please check the inputs`);
  } else if (number < 0){
    throw new Error(`Value '${number}' is less than 0, expected to be positive`);
  } else if (number % 1 !== 0){
    throw new Error(`Value '${number}' is float, expected integer`);
  } else  if ((number === 0) || (number === 1))
    return 1;
  else 
    return (number * factorial(number - 1));
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
  let string = prompt('Enter your name')
  if(string === null){
    alert('Вы отказались от ввода')
  }
  else if (string ==='') { 
    throw new Error('Provided empty name');               
  }
  else if(string!==null){                                
    if (confirm(`Is your name '${string}'`) === false){
      greetAndConfirm ()
    }
    return(string)
                             
  }    
}
function onClick() {
  greetAndConfirm()
}
export { factorial, onClick, greetAndConfirm };
