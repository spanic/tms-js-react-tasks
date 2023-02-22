/**
 * This file contains some examples for 'this' values in different types of functions
 * See https://doka.guide/js/function-context/ for details
 * Note: this behavior will be different when using strict and non-strict mode. Change /rollup.config.js (add strict: false) to check that.
 */

const sourceObject = {
  name: 'Andrew',
  age: 27,
};

function functionalDeclaration() {
  console.log(
    `(Functional declaration) ${this?.name} - ${this?.age} years old`
  );
  console.log(this);
}

const functionalExpression = function () {
  console.log(`(Functional expression) ${this?.name} - ${this?.age} years old`);
  console.log(this);
};

sourceObject.functionalDeclaration = functionalDeclaration;
sourceObject.functionalExpression = functionalExpression;

// 1. 'this' value for sourceoObject
console.log("🎙 'this' value for sourceObject:");
sourceObject.functionalDeclaration();
sourceObject.functionalExpression();

// 2. 'this' value is an object that's actually calls the function, not the one that owns it
console.log("🐏 'this' value for overridden object:");

const overriddenObject = {
  __proto__: sourceObject,
  name: 'Mariia',
  age: 29,
};

overriddenObject.functionalDeclaration();
overriddenObject.functionalExpression();

// 3. default 'this' value
console.log("🃏 default 'this' value:");
functionalDeclaration();
functionalExpression();

// 4. 'this' in a callback function
console.log("🗑 'this' value inside the callback:");
const array = [sourceObject];
array.forEach(functionalDeclaration);
array.forEach(functionalExpression);

// 4. manually setting 'this' for the function
console.log("🏠 'this' value after setting it manually:");
sourceObject.functionalDeclaration.call({
  name: 'Cristobal',
  age: 19,
});
// ... here it's equivalent to
sourceObject.functionalDeclaration.bind({
  name: 'Cristobal',
  age: 19,
})();
// ... and to
sourceObject.functionalDeclaration.apply({
  name: 'Cristobal',
  age: 19,
});

// 5. arrow functions
console.log("💢 'this' value for arrow functions:");

const arrowFunction = () => {
  console.log(`(Arrow function) ${this?.name} - ${this?.age} years old`);
  console.log(this);
};

sourceObject.arrowFunction = arrowFunction;

sourceObject.arrowFunction();

// same for call() and apply()
sourceObject.arrowFunction.bind({
  name: 'Cristobal',
  age: 19,
})();

// 6. context propagation for inner functions
const nestedFunctionalExpression = function () {
  console.log(
    `(Outer Functional Expression) ${this?.name} - ${this?.age} years old`
  );
  console.log(this);
  const innerFunctionalExpression = function () {
    console.log(
      `\t(Inner Functional Declaration) ${this?.name} - ${this?.age} years old`
    );
    console.log(this);
  };
  const innerArrowFunction = () => {
    console.log(
      `\t(Inner Arrow Function) ${this?.name} - ${this?.age} years old`
    );
    console.log(this);
  };
  innerFunctionalExpression();
  innerArrowFunction();
};

sourceObject.nestedFunctionalExpression = nestedFunctionalExpression;
sourceObject.nestedFunctionalExpression();
