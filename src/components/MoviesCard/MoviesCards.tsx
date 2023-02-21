import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.scss";
import {
  setDeleteFavouriteMovies,
  setFavouriteMovies,
} from "../../store/favouriteMoviesReducer";
import { RootState } from "../../store/store";
import { IMovie } from "../../types/types";

interface MovieItemProps {
  item: IMovie;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  withoutRating?: boolean;
  setChooseMovie: Dispatch<SetStateAction<IMovie>>;
}
export const MovieItem = ({
  item,
  setModalOpen,
  withoutRating,
  setChooseMovie,
}: MovieItemProps) => {
  const [isRate, setIsRate] = useState<boolean>(false);
  const ratedMovies = useSelector(
    (state: RootState) => state.rateMoviesReducer.ratedMovies
  );
  const ratedMovie = ratedMovies.find((movie) => movie.id === item.id);

  const checkIsRate = useCallback(() => {
    if (ratedMovie !== undefined) {
      setIsRate(true);
    }
  }, [ratedMovie]);

  useEffect(() => {
    checkIsRate();
  }, [checkIsRate]);

  const dispatch = useDispatch();
  const favMovies = useSelector(
    (state: RootState) => state.favouriteMoviesReducer.favouriteMovies
  );
  return (
    <div className="movie-item">
      <img src={item.src} alt="movie" className="movie-item__img" />
      <h1 className="movie-item__name">{item.name}</h1>
      <span className="movie-item__description">{item.description}</span>
      <div className="movie-item__buttons">
        {!withoutRating && (
          <button
            className="movie-item__btn"
            onClick={() => {
              setChooseMovie(item);
              setModalOpen(true);
            }}
          >
            {!isRate ? "Поставить оценку" : "Изменить оценку"}
          </button>
        )}
        {!favMovies.some((movies) => movies.id === item.id) ? (
          <button
            className="movie-item__btn"
            onClick={() => dispatch(setFavouriteMovies(item))}
          >
            Добавить в избранное
          </button>
        ) : (
          <button
            className="movie-item__btn"
            onClick={() => dispatch(setDeleteFavouriteMovies(item))}
          >
            Удалить из избранного
          </button>
        )}
      </div>
    </div>
  );
};

interface IMoviesCards {
  cards: IMovie[];
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setChooseMovie: Dispatch<SetStateAction<IMovie>>;
  withoutRating?: boolean;
}

const MoviesCards = ({
  withoutRating,
  cards,
  setModalOpen,
  setChooseMovie,
}: IMoviesCards) => {
  return (
    <div className="movies-cards">
      {cards &&
        cards.map((item) => (
          <MovieItem
            item={item}
            key={item.id}
            setModalOpen={setModalOpen}
            setChooseMovie={setChooseMovie}
            withoutRating={withoutRating}
          />
        ))}
    </div>
  );
};

export default MoviesCards;
