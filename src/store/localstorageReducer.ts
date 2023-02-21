import { PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "./../types/types";
import { IStateFavouriteMovie } from "./favouriteMoviesReducer";

export const defaultState: IStateFavouriteMovie = {
  favouriteMovies: [],
};

const ADD_MOVIES_FROM_LOCALSTORAGE = "ADD_MOVIES_FROM_LOCALSTORAGE";

export const localstorageReducer = (
  state = defaultState,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case ADD_MOVIES_FROM_LOCALSTORAGE:
      return {
        favouriteMovies: [...action.payload],
      };
    // отдельный редюсер

    default:
      return state;
  }
};

export const getMoviesFromLocalstorage = (movies: IMovie[]) => {
  return { type: ADD_MOVIES_FROM_LOCALSTORAGE, payload: movies };
};
