import { Dispatch, SetStateAction } from "react";
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
const MovieItem = ({
  item,
  setModalOpen,
  withoutRating,
  setChooseMovie,
}: MovieItemProps) => {
  const ratedMovies = useSelector(
    (state: RootState) => state.rateMoviesReducer.ratedMovies
  );
  const favMovies = useSelector(
    (state: RootState) => state.favouriteMoviesReducer.favouriteMovies
  );

  const ratedMovie = ratedMovies.find((movie) => movie.id === item.id);
  const dispatch = useDispatch();

  return (
    <div className="movie-cards__item">
      <img src={item.src} alt="movie" className="movie-cards__item-img" />
      <h1 className="movie-cards__item-name">{item.name}</h1>
      <span className="movie-cards__item-description">{item.description}</span>
      <div className="movie-cards__item-buttons">
        {!withoutRating && (
          <button
            className="movie-cards__item-btn"
            onClick={() => {
              setChooseMovie(item);
              setModalOpen(true);
            }}
          >
            {!ratedMovie ? "Поставить оценку" : "Изменить оценку"}
          </button>
        )}
        {!favMovies.some((movies) => movies.id === item.id) ? (
          <button
            className="movie-cards__item-btn"
            onClick={() => dispatch(setFavouriteMovies(item))}
          >
            Добавить в избранное
          </button>
        ) : (
          <button
            className="movie-cards__item-btn"
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
      <div className="movies-cards__wrapper">
        {cards.map((item) => (
          <MovieItem
            item={item}
            key={item.id}
            setModalOpen={setModalOpen}
            setChooseMovie={setChooseMovie}
            withoutRating={withoutRating}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesCards;
