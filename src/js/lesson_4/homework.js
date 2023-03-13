// import movies from '../data/moviesTestData';

/**
 * Функция должна возвращать топ-N фильмов с самым большим бюджетом. Если фильмов с одинаковым бюджетом несколько, они все должны попасть в результат выполнения функции.
 *
 * __Важно__: функция должна работать за линейное время O(n), то есть количество операций должно линейно зависеть от количества элементов (фильмов)
 *
 * @example
 * amount === 3:
 * [
 *   {Title: 'Pirates', ..., Production_Budget: 1000},
 *   {Title: 'The Land Girls', ..., Production_Budget: 900},
 *   {Title: 'Mississippi Mermaid', ..., Production_Budget: 900},
 *   {Title: 'Foolish', ..., Production_Budget: 200}
 * ]
 *
 * @param {number} amount number of rating positions to return (количество мест рейтинга)
 * @returns array of movies ordered by Production_Budget desc (массив фильмов, отсортированных по значению Production_Budget в порядке убывания (от большего к меньшему))
 */
function getMaxProductionBudgetMovies(amount) {
  // ...
}

/**
 * Помогите пользователю выбрать фильм для просмотра вечером: он хочет выбрать фильм определенного жанра с максимальным рейтингом.
 *
 * Функция должна возвращать объект, ключами которого будут значения свойств ``` Major_Genre ``` или, если его значение отсутствует - ``` Creative_Type ```, а значениями - массив фильмов данного жанра,
 * отсортированный одновременно по убыванию значений ``` IMDB_Rating ``` и ``` Rotten_Tomatoes_Rating ```
 *
 * @returns map ``` {Major_Genre: [movies]} ``` where movies are sorted by ``` IMDB_Rating ``` and ``` Rotten_Tomatoes_Rating ``` desc
 */
function getMoviesGroupedByGenres() {
  // ...
}

export { getMaxProductionBudgetMovies, getMoviesGroupedByGenres };
