/* eslint-disable */

/**
 * See https://doka.guide/js/var-let/ for details
 */

console.log(`⌛ Getting variable's value before it's declaration: a = ${a}`);
var a;

for (var i = 0; i < 10; i++) {}
console.log(`🙊 Getting counter value after loop is finished: i = ${i}`);

try {
  for (let j = 0; j < 10; j++) {}
  console.log(`🔫 Same case, but with let instead of var: i = ${j}`);
} catch (e) {
  console.warn(e);
}

/**
 * Getting parent function scope example
 */
try {
  var b = 10;
  function doSomething() {
    console.log(`📈 Inside doSomething() we have b = ${b}`);
  }
  doSomething();

  function doSomethingAgain() {
    var c = 10;
    console.log(`💹 Inside doSomethingAgain() we have c = ${c}`);
  }
  doSomethingAgain();
  console.log(`👩‍⚖️ Outside of doSomethingAgain() we have c = ${c}`);
} catch (e) {
  console.warn(e);
}
