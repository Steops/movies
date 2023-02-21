import {
  IRatedMovie,
  IStateRatedMovies,
  RatedMoviesAction,
  RatedMoviesTypes,
} from "../types/rateMovies";

const defaultState: IStateRatedMovies = {
  ratedMovies: [],
};

export const rateMoviesReducer = (
  state = defaultState,
  action: RatedMoviesAction
) => {
  switch (action.type) {
    case RatedMoviesTypes.RATE_MOVIES_REDUCER:
      const movieIndex = state.ratedMovies.findIndex(
        (item) => action.payload.id === item.id
      );
      if (movieIndex >= 0) {
        const copiedMovies = JSON.parse(JSON.stringify(state.ratedMovies));
        copiedMovies[movieIndex].rate = action.payload.rate;
        return {
          ratedMovies: [...copiedMovies],
        };
      }
      return {
        ratedMovies: [...state.ratedMovies, action.payload],
      };
    case RatedMoviesTypes.ADD_RATED_MOVIES_FROM_LOCALSTORAGE:
      return {
        ratedMovies: [...action.payload],
      };

    default:
      return state;
  }
};

export const setRateMovies = (ratedMovie: IRatedMovie) => {
  return { type: RatedMoviesTypes.RATE_MOVIES_REDUCER, payload: ratedMovie };
};

export const getRatedMoviesFromLocalstorage = (movies: IRatedMovie[]) => {
  return {
    type: RatedMoviesTypes.ADD_RATED_MOVIES_FROM_LOCALSTORAGE,
    payload: movies,
  };
};
