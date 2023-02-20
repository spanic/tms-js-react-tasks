/**
 * Import functions you want to be included into the main JS bundle.
 * This code will be executed as soon as the bundle is loaded
 */
import { User } from './homework';

const first = new User(41322, 'Volha');
const second = new User(23424, 'Yan');

console.log(first.compareById(second));
console.log(first.compareByNameLength(second));
