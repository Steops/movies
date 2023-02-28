import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRateMovies } from "../../store/rateMoviesReducer";
import { RootState } from "../../store/store";
import { IRate, IRatedMovie } from "../../types/rateMovies";
import { IMovie } from "../../types/types";

interface IStarRating {
  rating: number;
  setRating: any;
  title: string;
  ratingType: string;
}

const StarRating = ({ rating, setRating, title, ratingType }: IStarRating) => {
  const rateData = [5, 4, 3, 2, 1];
  return (
    <div className="stars">
      <span>{title}</span>
      {rateData.map((rate, index) => (
        <div
          className={`star ${rating >= rate ? "--fill" : ""}`}
          onClick={() => setRating(rate, ratingType)}
          key={index}
        >
          ★
        </div>
      ))}
    </div>
  );
};

interface IStars {
  setRating: any;
  rating: any;
}
const Stars = ({ setRating, rating }: IStars) => {
  const setRatingPart = (rate: number, ratingType: string) => {
    setRating({ ...rating, [ratingType]: rate });
  };
  const starRatingData = [
    {
      title: "Сценарий",
      ratingType: "scenario",
      rating: rating.scenario,
    },
    {
      title: "Актерское мастерство",
      ratingType: "artist",
      rating: rating.artist,
    },
    {
      title: "Операторская работа",
      ratingType: "operator",
      rating: rating.operator,
    },
  ];

  return (
    <div>
      {starRatingData.map((item, index) => (
        <StarRating
          title={item.title}
          setRating={setRatingPart}
          key={index}
          ratingType={item.ratingType}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

interface IModal {
  chooseMovie: IMovie;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ chooseMovie, setModalOpen }: IModal) => {
  const ratedMovies: IRatedMovie[] = useSelector(
    (state: RootState) => state.rateMoviesReducer.ratedMovies
  );
  const [currentRate, setCurrentRate] = useState<number>(0);

  const [rating, setRating] = useState<IRate>({
    scenario: 0,
    operator: 0,
    artist: 0,
  });

  const dispatch = useDispatch();

  const ratedMovie = ratedMovies.find((movie) => movie.id === chooseMovie?.id);

  const onSendRatingHandler = () => {
    dispatch(
      setRateMovies({
        ...chooseMovie,
        rate: rating,
      })
    );
    setModalOpen(false);
  };

  useEffect(() => {
    setCurrentRate(0);
  }, [chooseMovie]);

  useEffect(() => {
    if (ratedMovie) {
      setRating({
        scenario: ratedMovie.rate.scenario,
        artist: ratedMovie.rate.artist,
        operator: ratedMovie.rate.operator,
      });
    }
  }, [ratedMovie]);

  useEffect(() => {
    const sumRate = rating.scenario + rating.artist + rating.operator;
    const averageRate = Math.round((sumRate / 3) * 100) / 100;
    setCurrentRate(averageRate);
  }, [rating]);

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={() => setModalOpen(false)}></div>
      <div className="modal__content">
        <div className="modal__close" onClick={() => setModalOpen(false)}>
          х
        </div>
        <span className="modal__title">Оцените фильм "{chooseMovie.name}"</span>
        <Stars setRating={setRating} rating={rating} />

        <button
          className="modal__btn"
          disabled={!rating.artist || !rating.operator || !rating.scenario}
          onClick={onSendRatingHandler}
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
