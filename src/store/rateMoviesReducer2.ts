import { rateMoviesReducer } from "./rateMoviesReducer";
import { PayloadAction } from "@reduxjs/toolkit";

interface IRate {
  scenario?: number | null;
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

export const rateMoviesReducer2 = (
  state = defaultState,
  action: PayloadAction<any>
) => {};
