import { rateMoviesReducer } from "./rateMoviesReducer";
import { favouriteMoviesReducer } from "./favouriteMoviesReducer";
import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  moviesReducer,
  favouriteMoviesReducer,
  rateMoviesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
