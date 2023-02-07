import { AppDispatch } from "./store";

import { getMovies } from "./moviesReducer";

export const fetchMovies = () => {
  return (dispatch: AppDispatch) => {
    fetch("https://run.mocky.io/v3/f41356c2-e1ee-4fe3-aad7-62e2c5bb68a4")
      .then((response) => response.json())
      .then((json) => dispatch(getMovies(json.data)));
  };
};
