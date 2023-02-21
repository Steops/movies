import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { fetchMovies } from "./store/fetchMovies";
import { AppDispatch, RootState } from "./store/store";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { FavouritePage } from "./pages/FavouritePage";
import { Header } from "./components/Header/Header";
import { getFavouriteMoviesFromLocalstorage } from "./store/favouriteMoviesReducer";
import { IMovie } from "./types/types";
import { RatedPage } from "./pages/RatedPages";
import { getRatedMoviesFromLocalstorage } from "./store/rateMoviesReducer";
import { Menu } from "./components/Menu/Menu";
import { IRatedMovie } from "./types/rateMovies";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const favouriteMovies = useSelector(
    (state: RootState) => state.favouriteMoviesReducer.favouriteMovies
  );

  const ratedMovies = useSelector(
    (state: RootState) => state.rateMoviesReducer.ratedMovies
  );

  const favouriteRef = useRef<boolean>(true);
  const ratedRef = useRef<boolean>(true);

  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    const savedFavouriteMovies: IMovie[] = JSON.parse(
      localStorage.getItem("favourites") || "[]"
    );
    const savedRatedMovies: IRatedMovie[] = JSON.parse(
      localStorage.getItem("rated") || "[]"
    );
    dispatch(getFavouriteMoviesFromLocalstorage(savedFavouriteMovies));
    dispatch(getRatedMoviesFromLocalstorage(savedRatedMovies));
  }, [dispatch]);

  useEffect(() => {
    if (!favouriteRef.current) {
      localStorage.setItem("favourites", JSON.stringify(favouriteMovies));
    } else {
      favouriteRef.current = false;
    }
  }, [favouriteMovies]);

  useEffect(() => {
    if (!ratedRef.current) {
      localStorage.setItem("rated", JSON.stringify(ratedMovies));
    } else {
      ratedRef.current = false;
    }
  }, [ratedMovies]);

  return (
    <div className="app">
      <Header setMenuActive={setMenuActive} menuActive={menuActive} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavouritePage />} />
        <Route path="/rated" element={<RatedPage />} />
      </Routes>
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
    </div>
  );
};

export default App;
