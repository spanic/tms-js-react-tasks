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
  const result = [];

  while (amount > 0) {
    const previousMaxBudget = result[result.length - 1]?.Production_Budget;

    let moviesWithSameBudget = [];
    let maxBudget = -Infinity;

    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i];
      const currentBudget = movie.Production_Budget;

      if (currentBudget === null || isNaN(currentBudget)) continue;
      if (previousMaxBudget && currentBudget >= previousMaxBudget) continue;

      if (currentBudget > maxBudget) {
        maxBudget = currentBudget;
        moviesWithSameBudget = [movie];
      } else if (currentBudget === maxBudget) {
        moviesWithSameBudget.push(movie);
      }
    }

    amount -= 1;
    result.push(...moviesWithSameBudget);
  }

  return result;
}

// console.log(getMaxProductionBudgetMovies(3, movies));

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

  movies.forEach((movie) => {
    const currentGenre = movie.Major_Genre || movie.Creative_Type;
    if (!currentGenre) return;
    if (result[currentGenre]) {
      result[currentGenre].push(movie);
    } else {
      result[currentGenre] = [movie];
    }
  });

  Object.values(result).forEach((movies) => {
    movies.sort(
      (a, b) =>
        b.IMDB_Rating - a.IMDB_Rating ||
        b.Rotten_Tomatoes_Rating - a.Rotten_Tomatoes_Rating
    );
  });

  return result;
}

export { getMaxProductionBudgetMovies, getMoviesGroupedByGenres };
