function sum(...numbers) {
  if (!Array.isArray(numbers) || !numbers.length) {
    throw new Error('Please add at least one argument');
  }
  return numbers.reduce((result, currentValue) => {
    if (isNaN(currentValue)) {
      throw new Error(
        `Argument '${currentValue}' cannot be converted to number, please check the inputs`
      );
    } else {
      return result + Number(currentValue);
    }
  }, 0);
}

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

function onClick() {
  alert('Wow!');
}

function sayHello() {
  console.log('Hello, world!');
}

export { sum, factorial, onClick, sayHello };
