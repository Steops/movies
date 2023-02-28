import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../components/Modal/Modal";
import MoviesCards from "../components/MoviesCard/MoviesCards";
import { RootState } from "../store/store";
import { IMovie } from "../types/types";

const MainPage = () => {
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

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
    </div>
  );
};

export { MainPage };
