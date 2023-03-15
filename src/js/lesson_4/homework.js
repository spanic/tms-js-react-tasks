import movies from '../data/moviesTestData';

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
  let result = [];
  for (let i = 1; i <= amount; i++) {
    const budgetOfLastFilm = result[result.length - 1]?.Production_Budget;
    let maxBudget = -Infinity;
    let filmsWithSameBudget = [];
    for (let i = 0; i < movies.length; i++) {
      const currentFilm = movies[i];
      const budgetOfFilm = currentFilm?.Production_Budget;

      if (typeof budgetOfFilm !== 'number') continue;
      if (budgetOfLastFilm && budgetOfFilm >= budgetOfLastFilm) continue;

      if (budgetOfFilm > maxBudget) {
        maxBudget = budgetOfFilm;
        filmsWithSameBudget = [currentFilm];
      } else if (budgetOfFilm === maxBudget) {
        filmsWithSameBudget.push(currentFilm);
      }
    }
    result.push(...filmsWithSameBudget);
  }
  return result;
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
  const result = {};
  for (const element of movies) {
    const currentGenre = element.Major_Genre
      ? element.Major_Genre
      : element.Creative_Type;
    if (!currentGenre) {
      continue;
    }
    if (result.hasOwnProperty(currentGenre)) {
      result[currentGenre].push(element);
    } else {
      result[currentGenre] = [element];
    }
  }
  for (const genre in result) {
    result[genre].sort(
      (a, b) =>
        b.IMDB_Rating - a.IMDB_Rating ||
        b.Rotten_Tomatoes_Rating - a.Rotten_Tomatoes_Rating
    );
  }
  return result;
}

export { getMaxProductionBudgetMovies, getMoviesGroupedByGenres };
