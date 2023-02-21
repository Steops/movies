import { PayloadAction } from "@reduxjs/toolkit";
const RATE_MOVIES_REDUCER = "RATE_MOVIES_REDUCER";
const ADD_RATED_MOVIES_FROM_LOCALSTORAGE = "ADD_RATED_MOVIES_FROM_LOCALSTORAGE";

export interface IRate {
  scenario?: number;
  artist?: number;
  operator?: number;
}

export interface IRatedMovie {
  id: number;
  name: string;
  description: string;
  src: string;
  rate: IRate;
}

export interface IRatedMovies {
  ratedMovies: IRatedMovie[];
}

const defaultState: IRatedMovies = {
  ratedMovies: [],
};

export const rateMoviesReducer = (
  state = defaultState,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case RATE_MOVIES_REDUCER:
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
    case ADD_RATED_MOVIES_FROM_LOCALSTORAGE:
      return {
        ratedMovies: [...action.payload],
      };

    default:
      return state;
  }
};

export const setRateMovies = (ratedMovie: IRatedMovie) => {
  return { type: RATE_MOVIES_REDUCER, payload: ratedMovie };
};

export const getRatedMoviesFromLocalstorage = (movies: IRatedMovie[]) => {
  return { type: ADD_RATED_MOVIES_FROM_LOCALSTORAGE, payload: movies };
};
