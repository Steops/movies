import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import { fetchMovies } from "./store/fetchMovies";
import { AppDispatch } from "./store/store";
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
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavouritePage />} />
      </Routes>
    </div>
  );
};

export default App;

// проверять в юзэфф локал сторадж есть или нет
