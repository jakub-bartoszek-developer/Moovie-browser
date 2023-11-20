import { put, call, takeLatest, delay, } from "redux-saga/effects";
import {
  fetchPopularMovies,
  fetchSearchResults,
  setGenres,
  setMovies,
  setMovieDetails,
  fetchMovieDetails,
  // setCredits,
  setStatus,
} from "../redux/moviesSlice";
import { getPopularMovies } from './getPopularMovies';
import { getSearchResults } from './getSearchResults';
import { getGenres } from './getGenres';
import { getMoviesDetails } from './getMovieDetails';
import { getCredits } from './getCredits';

function* fetchPopularMoviesHandler() {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const movies = yield call(getPopularMovies);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}
export function* fetchMovieDetailsHandler({ payload: movieId }) {
  try {
    yield put(setStatus("loading"))
    yield delay(1000);
    const movieDetails = yield call(getMoviesDetails, movieId);
    yield put(setMovieDetails(movieDetails));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
};

// export function* fetchCreditsHandler({ payload: movieId }) {
//   try {
//     yield delay(1000);

//     const credits = yield call(getCredits, movieId);
//     yield put(setCredits(credits));
//   } catch (error) {
//     yield put(alert("Something went wrong!"));
//   }
// };


function* fetchSearchResultsHandler(searchQuery) {
  try {
    yield put(setStatus("loading"));
    yield delay(1000);
    const movies = yield call(getSearchResults, searchQuery.payload);
    const genres = yield call(getGenres);
    yield put(setMovies(movies));
    yield put(setGenres(genres));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  // yield takeLatest(fetchMovieDetails.type, fetchCreditsHandler);
}
