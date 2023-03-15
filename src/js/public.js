/**
 * Import cjs modules those you want to be added by rollup outside of the main application bundle.
 * Functions you import here will be visible in HTML (useful for event handlers) and accessible via my.{%FUNCTION_NAME%}
 */

import { onClick } from './lesson_1/homework';

export { onClick };

/**
 * Lesson 1
 */
// require('./lesson_1/useStrictExamples');
// require('./lesson_1/varLetConstExample');
// require('./lesson_1/typeCoercionExamples');

/**
 * Lesson 3
 */
// require('./lesson_3/functionsExamples');

/**
 * Lesson 6
 */
// require('./lesson_6/JSClassesPlayground');

/**
 * Lesson 9
 */
// require('./lesson_9/fetchPlayground');
