import { PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../types/types";

const FETCH_MOVIES = "FETCH_MOVIES";

export interface IStateMovies {
  movies: IMovie[];
}

const defaultState: IStateMovies = {
  movies: [],
};

export const moviesReducer = (
  state = defaultState,
  action: PayloadAction<IMovie[]>
) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: [...action.payload] };
    default:
      return state;
  }
};

export const getMovies = (movies: IMovie[]) => {
  return { type: FETCH_MOVIES, payload: movies };
};
