import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { fetchMovies } from "./store/fetchMovies";
import { AppDispatch, RootState } from "./store/store";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { FavouritePage } from "./pages/FavouritePage";
import { Header } from "./components/Header/Header";
import { getMoviesFromLocalstorage } from "./store/localstorageReducer";
import { IMovie } from "./types/types";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movies = useSelector((state: RootState) => state);
  useEffect(() => {
    const savedMovies: IMovie[] = JSON.parse(
      localStorage.getItem("favourites") || "[]"
    );
    dispatch(getMoviesFromLocalstorage(savedMovies));
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage cards={movies.movies.movies} />} />
        <Route
          path="/favorites"
          element={
            <FavouritePage cards={movies.favouriteMovies.favouriteMovies} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

// проверять в юзэфф локал сторадж есть или нет
