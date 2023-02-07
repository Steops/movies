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

export const rateMoviesReducer = (
  state = defaultState,
  action: PayloadAction<IRatedMovie>
) => {
  switch (action.type) {
    case RATE_MOVIES_REDUCER:
      console.log(action.payload);
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
