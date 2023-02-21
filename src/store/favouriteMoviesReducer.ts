import { IMovie } from "./../types/types";
import { PayloadAction } from "@reduxjs/toolkit";

const ADD_FAVOURITE_MOVIES = "ADD_FAVOURITE_MOVIES";
const DELETE_FAVOURITE_MOVIES = "DELETE_FAVOURITE_MOVIES";
const ADD_FAVOURITE_MOVIES_FROM_LOCALSTORAGE =
  "ADD_FAVOURITE_MOVIES_FROM_LOCALSTORAGE";

export interface IStateFavouriteMovie {
  favouriteMovies: IMovie[];
}

const defaultStates: IStateFavouriteMovie = {
  favouriteMovies: [],
};

export const favouriteMoviesReducer = (
  state = defaultStates,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case ADD_FAVOURITE_MOVIES:
      return {
        favouriteMovies: [...state.favouriteMovies, action.payload],
      };
    case DELETE_FAVOURITE_MOVIES:
      const deleteState = state.favouriteMovies.filter(
        (item: IMovie) => item.id !== action.payload.id
      );
      return {
        favouriteMovies: [...deleteState],
      };
    case ADD_FAVOURITE_MOVIES_FROM_LOCALSTORAGE:
      return {
        favouriteMovies: [...action.payload],
      };

    default:
      return state;
  }
};

export const setFavouriteMovies = (movie: IMovie) => {
  return { type: ADD_FAVOURITE_MOVIES, payload: movie };
};

export const setDeleteFavouriteMovies = (movie: IMovie) => {
  return { type: DELETE_FAVOURITE_MOVIES, payload: movie };
};

export const getFavouriteMoviesFromLocalstorage = (movies: IMovie[]) => {
  return { type: ADD_FAVOURITE_MOVIES_FROM_LOCALSTORAGE, payload: movies };
};
