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
const Modal = ({ chooseMovie, isModal, rates, setRates }: IModal) => {
  const dispatch = useDispatch();

  const rateData = [5, 4, 3, 2, 1];
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
              setRates(rate);
              dispatch(setRateMovies({ ...chooseMovie, rate }));
            }}
            key={index}
          >
            *
          </div>
        ))}
      </div>
      <span className="modal__title">Ваша оценка: {rates}</span>
    </div>
  );
};

export { Modal };