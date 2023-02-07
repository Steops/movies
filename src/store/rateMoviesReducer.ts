import { PayloadAction } from "@reduxjs/toolkit";
const RATE_MOVIES_REDUCER = "RATE_MOVIES_REDUCER";

export interface IRatedMovie {
  id: number;
  name: string;
  description: string;
  src: string;
  rate: number;
}

export interface IRatedMovies {
  ratedMovies: IRatedMovie[];
}

const defaultState: IRatedMovies = {
  ratedMovies: [],
};

//TODO: Add localstorage

export const rateMoviesReducer = (
  state = defaultState,
  action: PayloadAction<IRatedMovie>
) => {
  switch (action.type) {
    case RATE_MOVIES_REDUCER:
      const movieIndex = state.ratedMovies.findIndex(
        (item) => action.payload.id === item.id
      );
      if (movieIndex >= 0) {
        const newRatedMovie = {
          ...state.ratedMovies[movieIndex],
          rate: action.payload.rate,
        };
        const copiedMovies = [...state.ratedMovies];
        copiedMovies.splice(movieIndex, 1, newRatedMovie);

        return {
          ratedMovies: [...copiedMovies],
        };
      }
      return {
        ratedMovies: [...state.ratedMovies, action.payload],
      };
    default:
      return state;
  }
};

export const setRateMovies = (ratedMovies: IRatedMovie) => {
  return { type: RATE_MOVIES_REDUCER, payload: ratedMovies };
};
