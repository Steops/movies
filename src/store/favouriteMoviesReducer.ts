import {
  FavouriteActionTypes,
  FavouriteMoviesAction,
  IStateFavouriteMovie,
} from "../types/favouriteMovies";
import { IMovie } from "./../types/types";

const defaultStates: IStateFavouriteMovie = {
  favouriteMovies: [],
};

export const favouriteMoviesReducer = (
  state = defaultStates,
  action: FavouriteMoviesAction
) => {
  switch (action.type) {
    case FavouriteActionTypes.ADD_FAVOURITE_MOVIES:
      return {
        favouriteMovies: [...state.favouriteMovies, action.payload],
      };
    case FavouriteActionTypes.DELETE_FAVOURITE_MOVIES:
      const deleteState = state.favouriteMovies.filter(
        (item: IMovie) => item.id !== action.payload.id
      );
      return {
        favouriteMovies: [...deleteState],
      };
    case FavouriteActionTypes.ADD_FAVOURITE_MOVIES_FROM_LOCALSTORAGE:
      return {
        favouriteMovies: [...action.payload],
      };

    default:
      return state;
  }
};

export const setFavouriteMovies = (movie: IMovie) => {
  return { type: FavouriteActionTypes.ADD_FAVOURITE_MOVIES, payload: movie };
};

export const setDeleteFavouriteMovies = (movie: IMovie) => {
  return { type: FavouriteActionTypes.DELETE_FAVOURITE_MOVIES, payload: movie };
};

export const getFavouriteMoviesFromLocalstorage = (movies: IMovie[]) => {
  return {
    type: FavouriteActionTypes.ADD_FAVOURITE_MOVIES_FROM_LOCALSTORAGE,
    payload: movies,
  };
};
