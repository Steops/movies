import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRateMovies } from "../../store/rateMoviesReducer";
import { RootState } from "../../store/store";
import { IMovie } from "../../types/types";

interface IModal {
  isModal: boolean;
  chooseMovie: IMovie;
  rates: number;
  setRates: any;
}
const Modal = ({ chooseMovie, isModal }: IModal) => {
  const dispatch = useDispatch();

  const ratedMovies = useSelector(
    (state: RootState) => state.rateMoviesReducer.ratedMovies
  );
  const [currentRate, setCurrentRate] = useState(0);

  useEffect(() => {
    setCurrentRate(0);
  }, [chooseMovie]);

  useEffect(() => {
    const ratedMovie = ratedMovies.find((movie) => movie.id === chooseMovie.id);
    if (ratedMovie) {
      setCurrentRate(ratedMovie.rate);
    }
  }, [chooseMovie?.id, ratedMovies]);

  const rateData = [5, 4, 3, 2, 1];

  //TODO: Add overlay
  return !isModal ? null : (
    <div className="modal">
      <span className="modal__title">
        Оцените фильмец, крутой или гавно ебаное?
      </span>
      <span>ID фильма для проброса: .......{chooseMovie.name}</span>
      <div className="stars">
        {rateData.map((rate, index) => (
          <div
            className="star"
            onClick={() => {
              dispatch(setRateMovies({ ...chooseMovie, rate }));
            }}
            key={index}
          >
            *
          </div>
        ))}
      </div>
      <span className="modal__title">Ваша оценка: {currentRate}</span>
    </div>
  );
};

export { Modal };
