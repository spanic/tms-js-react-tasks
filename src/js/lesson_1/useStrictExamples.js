/* eslint-disable */

/**
 * See https://doka.guide/js/use-strict/ for details.
 * ⚠️ To switch the strict mode add output.strict to the rollup config
 */

/**
 * Defining variable with no keyword
 */
try {
  console.log('🤔 Case №1 - variable without keyword');
  a = 'Variable can be defined without the keyword in non-strict mode';
  console.log(a); // no fail
  console.log(this); // 'a' will be added to the global window object
} catch (error) {
  console.warn(error);
}

/**
 * Changing the non-writable object property
 */
try {
  console.log('🚟 Case №2 - object with unmodifiable property');
  const obj = {};
  Object.defineProperty(obj, 'name', { value: 'Andrew', writable: false });
  obj.name = 'James'; // again no fail
  console.log(obj); // ... but name won't be changed
} catch (error) {
  console.warn(error);
}

/**
 * Defining a new property to the non-extensible object
 */
try {
  console.log('🛏️ Case №3 - non-extensible object');
  const notExtensibleObj = {};
  Object.preventExtensions(notExtensibleObj);
  notExtensibleObj.someProp = 'Value'; // still that's OK
  console.log(notExtensibleObj); // ... but again we won't see that property being added
} catch (error) {
  console.warn(error);
}
