/* eslint-disable */

/**
 * Реализуйте логику сравнения объектов по id и длине имени.
 * =========================================================
 *
 * Предположим, даны 2 объекта: first и second, конструктор описан ниже. Правила сравнения следующие:
 *
 * Сравнение по id:
 * 1. если ``` first.id > second.id ```, то ``` first > second ```, функция-компаратор должна вернуть строку ``` Object 1 is greater than Object 2: id ${значение_id_у_first} > ${значение_id_у_second} ```
 * 2. если ``` first.id === second.id ```, то ``` first === second ```, результат: ``` Object 1 is equal to Object 2: id ${значение_id_у_first} == ${значение_id_у_second} ```
 * 3. если ``` first.id < second.id ```, то ``` first < second ```, результат: ``` Object 1 is less than Object 2: id ${значение_id_у_first} < ${значение_id_у_second} ```
 *
 * Сравнение по длине имени:
 * 1. если ``` first.name.length > second.name.length ```, то ``` first < second ```, результат: ``` Object 1 is less than Object 2: name length ${значение_name.length_у_first} > ${значение_name.length_у_second} ```
 * 2. если ``` first.name.length === second.name.length ```, то ``` first === second ```, результат: ``` Object 1 is equal to Object 2: name length ${значение_name.length_у_first} == ${значение_name.length_у_second} ```
 * 3. если ``` first.name.length < second.name.length ```, то ``` first > second ```, результат: ``` Object 1 is greater than Object 2: name length ${значение_name.length_у_first} < ${значение_name.length_у_second} ```
 *
 * Синтаксис сравнения: ``` first.compareByNameLength(second) ```, пример - в index.js
 *
 * Подсказка: используйте шаблоны функций, представленные ниже:
 *
 */

/**
 * Constructor
 * @param {number} id
 * @param {string} name
 */
function User(id, name) {
  this.id = id;
  this.name = name;
  this.compareById = compareById;
  this.compareByNameLength = compareByNameLength;
}

const getId = (object) => {
  return object.id;
};

const getNameLength = (object) => {
  return object.name.length;
};

/**
 * Эта функция должна вызывать compare()
 *
 * @param {object} object object to be compared with (ссылка на сравниваемый объект)
 */

function compareById(object) {
  return compare.call(this, object, getId, compareIds);
}

/**
 * Эта функция тоже должна вызывать compare()
 *
 * @param {object} object object to be compared with (ссылка на сравниваемый объект)
 */
function compareByNameLength(object) {
  return compare.call(this, object, getNameLength, compareNameLengths);
}

function compare(object, getPropToCompareFn, compareFn) {
  return compareFn(getPropToCompareFn(this), getPropToCompareFn(object));
}

/**
 * Эта функция должна реализовывать логику сравнения значений id и возвращать искомый результат
 * @param {number} firstValue initial object's id (значение id исходного объекта)
 * @param {number} secondValue comparable object's id (значение id сравниваемого объекта)
 */
function compareIds(firstValue, secondValue) {
  if (firstValue > secondValue) {
    return `Object 1 is greater than Object 2: id ${firstValue} > ${secondValue}`;
  } else if (firstValue === secondValue) {
    return `Object 1 is equal to Object 2: id ${firstValue} == ${secondValue}`;
  } else if (firstValue < secondValue) {
    return `Object 1 is less than Object 2: id ${firstValue} < ${secondValue}`;
  }
}

/**
 * Эта функция должна реализовывать логику сравнения значений name.length и возвращать искомый результат
 * @param {number} firstValue initial object's name length (значение длины name исходного объекта)
 * @param {number} secondValue comparable object's name length (значение длины name сравниваемого объекта)
 */
function compareNameLengths(firstValue, secondValue) {
  if (firstValue > secondValue) {
    return `Object 1 is less than Object 2: name length ${firstValue} > ${secondValue}`;
  } else if (firstValue === secondValue) {
    return `Object 1 is equal to Object 2: name length ${firstValue} == ${secondValue}`;
  } else if (firstValue < secondValue) {
    return `Object 1 is greater than Object 2: name length ${firstValue} < ${secondValue}`;
  }
}

export { User, compareById, compareByNameLength };
