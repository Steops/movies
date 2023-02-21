import { IMovie } from "./types";
export enum FavouriteActionTypes {
  ADD_FAVOURITE_MOVIES = "ADD_FAVOURITE_MOVIES",
  DELETE_FAVOURITE_MOVIES = "DELETE_FAVOURITE_MOVIES",
  ADD_FAVOURITE_MOVIES_FROM_LOCALSTORAGE = "ADD_FAVOURITE_MOVIES_FROM_LOCALSTORAGE",
}

export interface AddFavouriteMoviesAction {
  type: FavouriteActionTypes.ADD_FAVOURITE_MOVIES;
  payload: IMovie;
}

export interface DeleteFavouriteMoviesAction {
  type: FavouriteActionTypes.DELETE_FAVOURITE_MOVIES;
  payload: IMovie;
}

export interface AddFavouriteMoviesFromLocalstorageAction {
  type: FavouriteActionTypes.ADD_FAVOURITE_MOVIES_FROM_LOCALSTORAGE;
  payload: IMovie[];
}

export type FavouriteMoviesAction =
  | AddFavouriteMoviesAction
  | DeleteFavouriteMoviesAction
  | AddFavouriteMoviesFromLocalstorageAction;

export interface IStateFavouriteMovie {
  favouriteMovies: IMovie[];
}
