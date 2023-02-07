import { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../components/Modal/Modal";
import MoviesCards from "../components/MoviesCard/MoviesCards";
import { RootState } from "../store/store";
import { IMovie } from "../types/types";

const MainPage = () => {
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

  const [chooseMovie, setChooseMovie] = useState<IMovie | null>(null);
  //TODO isModalOpen, setIsModalOpen
  const [isModal, setModal] = useState<boolean>(false);

  return (
    <div className="main-page">
      <button onClick={() => setModal(false)}>fuckoff</button>
      <Modal isModal={isModal} chooseMovie={chooseMovie} />
      <MoviesCards
        cards={movies}
        setModal={setModal}
        setChooseMovie={setChooseMovie}
      />
    </div>
  );
};

export { MainPage };
