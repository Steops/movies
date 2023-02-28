import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../components/Modal/Modal";
import MoviesCards from "../components/MoviesCard/MoviesCards";
import { RootState } from "../store/store";
import { IMovie } from "../types/types";

const FavouritePage = () => {
  const movies = useSelector(
    (state: RootState) => state.favouriteMoviesReducer.favouriteMovies
  );
  const [chooseMovie, setChooseMovie] = useState<IMovie>({
    id: 0,
    name: "",
    description: "",
    src: "",
    rate: {},
  });
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="page">
      {isModalOpen && (
        <Modal setModalOpen={setModalOpen} chooseMovie={chooseMovie} />
      )}
      <MoviesCards
        cards={movies}
        setModalOpen={setModalOpen}
        setChooseMovie={setChooseMovie}
      />
      {movies.length === 0 && (
        <span className="page__alert">Фильмов в избранном пока нет!</span>
      )}
    </div>
  );
};

export { FavouritePage };
