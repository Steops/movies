import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import MoviesCards from "../components/MoviesCard/MoviesCards";
import { IMovie, IPage } from "../types/types";

const MainPage = ({ cards }: IPage) => {
  const [chooseMovie, setChooseMovie] = useState<IMovie>(cards[4]);
  const [isModal, setModal] = useState<boolean>(false);
  const [rates, setRates] = useState<number>(0);

  return (
    <div className="main-page">
      <button onClick={() => setModal(false)}>fuckoff</button>
      <Modal
        isModal={isModal}
        chooseMovie={chooseMovie}
        setRates={setRates}
        rates={rates}
      />
      <MoviesCards
        cards={cards}
        setModal={setModal}
        setChooseMovie={setChooseMovie}
        setRates={setRates}
        chooseMovie={chooseMovie}
      />
    </div>
  );
};

export { MainPage };
