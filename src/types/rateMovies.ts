import { IMovie } from "./types";
export enum RatedMoviesTypes {
  RATE_MOVIES_REDUCER = "RATE_MOVIES_REDUCER",
  ADD_RATED_MOVIES_FROM_LOCALSTORAGE = "ADD_RATED_MOVIES_FROM_LOCALSTORAGE",
}

export interface RateMoviesAction {
  type: RatedMoviesTypes.RATE_MOVIES_REDUCER;
  payload: IMovie;
}

export interface AddRatedMoviesFromLocalstorageAction {
  type: RatedMoviesTypes.ADD_RATED_MOVIES_FROM_LOCALSTORAGE;
  payload: IMovie[];
}

export type RatedMoviesAction =
  | RateMoviesAction
  | AddRatedMoviesFromLocalstorageAction;

export interface IRate {
  scenario: number;
  artist: number;
  operator: number;
}

export interface IRatedMovie {
  id: number;
  name: string;
  description: string;
  src: string;
  rate: IRate;
}

export interface IStateRatedMovies {
  ratedMovies: IRatedMovie[];
}
