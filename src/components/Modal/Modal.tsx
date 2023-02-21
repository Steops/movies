import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRatedMovie, setRateMovies } from "../../store/rateMoviesReducer";
import { RootState } from "../../store/store";
import { IMovie } from "../../types/types";

interface IStarRating {
  rating: number;
  setRating: (value: number) => void;
}

const StarRating = ({ rating, setRating }: IStarRating) => {
  const rateData = [5, 4, 3, 2, 1];
  return (
    <div className="stars">
      {rateData.map((rate, index) => (
        <div
          className={`star ${rating >= rate ? "--fill" : ""}`}
          onClick={() => setRating(rate)}
          key={index}
        >
          ★
        </div>
      ))}
    </div>
  );
};

interface IModal {
  isModalOpen: boolean;
  chooseMovie: IMovie;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ chooseMovie, isModalOpen, setModalOpen }: IModal) => {
  const ratedMovies: IRatedMovie[] = useSelector(
    (state: RootState) => state.rateMoviesReducer.ratedMovies
  );

  const [currentRate, setCurrentRate] = useState<number>(0);

  interface IRating {
    scenario: number;
    operator: number;
    artist: number;
  }
  const [rating, setRating] = useState<IRating>({
    scenario: 0,
    operator: 0,
    artist: 0,
  });

  const setRatingScenario = (rate: number) => {
    setRating({ ...rating, scenario: rate });
  };

  const setRatingOperator = (rate: number) => {
    setRating({ ...rating, operator: rate });
  };

  const setRatingArtist = (rate: number) => {
    setRating({ ...rating, artist: rate });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentRate(0);
  }, [chooseMovie]);

  const ratedMovie = ratedMovies.find((movie) => movie.id === chooseMovie?.id);

  useEffect(() => {
    if (ratedMovie) {
      setRating({
        scenario: ratedMovie.rate.scenario || 0,
        artist: ratedMovie.rate.artist || 0,
        operator: ratedMovie.rate.operator || 0,
      });
    } else {
      setRating({
        scenario: 0,
        artist: 0,
        operator: 0,
      });
    }
  }, [ratedMovie]);

  useEffect(() => {
    let rateScenario = rating.scenario;
    let rateArtist = rating.artist;
    let rateOperator = rating.operator;

    const sumRate = rateScenario + rateArtist + rateOperator;
    const averageRate = Math.round((sumRate / 3) * 1e2) / 1e2;
    setCurrentRate(averageRate);
  }, [rating]);

  let isRating = false;

  const setIsRating = () => {
    if (rating.artist !== 0 && rating.operator !== 0 && rating.scenario !== 0) {
      isRating = true;
    }
    return isRating;
  };

  setIsRating();

  return !isModalOpen ? null : (
    <div className="modal">
      <div className="modal__overlay" onClick={() => setModalOpen(false)}></div>
      <div className="modal__content">
        <div className="modal__close" onClick={() => setModalOpen(false)}>
          х
        </div>
        <span className="modal__title">Оцените фильм "{chooseMovie.name}"</span>
        <span>Сценарий</span>
        <StarRating rating={rating.scenario} setRating={setRatingScenario} />

        <span>Актерское мастерство</span>
        <StarRating rating={rating.artist} setRating={setRatingArtist} />

        <span>Операторская работа</span>
        <StarRating rating={rating.operator} setRating={setRatingOperator} />
        <button
          className="modal__btn"
          disabled={isRating ? false : true}
          onClick={() => {
            dispatch(
              setRateMovies({
                ...chooseMovie,
                rate: rating,
              })
            );
            setModalOpen(false);
          }}
        >
          {ratedMovie ? "Изменить оценку" : "Оценить фильм"}
        </button>
        <span className="modal__title">
          Ваша оценка: {currentRate ? currentRate : ""}
        </span>
      </div>
    </div>
  );
};

export { Modal };
