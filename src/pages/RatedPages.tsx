import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../components/Modal/Modal";
import MoviesCards from "../components/MoviesCard/MoviesCards";
import { RootState } from "../store/store";
import { IMovie } from "../types/types";

const RatedPage = () => {
  const movies = useSelector(
    (state: RootState) => state.rateMoviesReducer.ratedMovies
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
      <Modal
        isModalOpen={isModalOpen}
        chooseMovie={chooseMovie}
        setModalOpen={setModalOpen}
      />
      <MoviesCards
        cards={movies}
        setModalOpen={setModalOpen}
        setChooseMovie={setChooseMovie}
      />
      <span
        className={movies.length === 0 ? "page__alert-on" : "page__alert-off"}
      >
        Оценённых фильмов пока нет!
      </span>
    </div>
  );
};

export { RatedPage };
