import { PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../types/types";

const ADD_FAVOURITE_MOVIES = "ADD_FAVOURITE_MOVIES";
const DELETE_FAVOURITE_MOVIES = "DELETE_FAVOURITE_MOVIES";

export interface IStateFavouriteMovie {
  favouriteMovies: IMovie[];
}

const defaultStates: IStateFavouriteMovie = {
  favouriteMovies: [],
};

export const favouriteMoviesReducer = (
  state = defaultStates,
  action: PayloadAction<IMovie>
) => {
  switch (action.type) {
    case ADD_FAVOURITE_MOVIES:
      localStorage.setItem(
        "favourites",
        JSON.stringify([...state.favouriteMovies, action.payload])
      );
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
