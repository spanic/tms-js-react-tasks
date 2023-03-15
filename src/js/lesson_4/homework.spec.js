import moviesGroupedByGenre from '../data/moviesGroupedByGenre';
import {
  getMaxProductionBudgetMovies,
  getMoviesGroupedByGenres,
} from './homework';

xdescribe('Validating getMaxProductionBudgetMovies function', () => {
  test('returns top-3 rating positions of movies with highest Production_Budget', () => {
    expect(getMaxProductionBudgetMovies(3)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          Title: "Pirates of the Caribbean: At World's End",
        }),
        expect.objectContaining({
          Title: 'Spider-Man 3 (for test)',
        }),
        expect.objectContaining({
          Title: 'Spider-Man 3',
        }),
        expect.objectContaining({
          Title: 'Harry Potter and the Half-Blood Prince',
        }),
      ])
    );
  });
});

xdescribe('Validating getMoviesGroupedByGenres function', () => {
  test('returns properly groped & sorted movies map', () => {
    expect(getMoviesGroupedByGenres()).toStrictEqual(moviesGroupedByGenre);
  });
});
