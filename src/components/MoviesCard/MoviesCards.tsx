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
  setModal: any;
  setChooseMovie: any;
  setRates: any;
  chooseMovie: IMovie;
}
export const MovieItem = ({
  item,
  setModal,
  setChooseMovie,
  setRates,
  chooseMovie,
}: MovieItemProps) => {
  const dispatch = useDispatch();
  const favMovies = useSelector(
    (state: RootState) => state.favouriteMovies.favouriteMovies
  );
  const ratedMovies = useSelector(
    (state: RootState) => state.ratedMovies.ratedMovies
  );

  const rateMovie = ratedMovies.find((item) => {
    if (item.id === chooseMovie.id) {
      return item;
    } else {
      return 0;
    }
  });

  return (
    <div className="movie-item">
      <img src={item.src} alt="movie" className="movie-item__img" />
      <h1 className="movie-item__name">{item.name}</h1>
      <span className="movie-item__description">{item.description}</span>
      <div className="movie-item__buttons">
        <button
          className="movie-item__btn"
          onClick={() => {
            setModal(true);
            setChooseMovie(item);
            setRates(rateMovie?.id);
          }}
        >
          Изменить оценку
        </button>
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
  setModal: any;
  setChooseMovie: any;
  setRates: any;
  chooseMovie: IMovie;
}
const MoviesCards = ({
  cards,
  setModal,
  setChooseMovie,
  setRates,
  chooseMovie,
}: IMoviesCards) => {
  return (
    <div className="movies-cards">
      {cards &&
        cards.map((item) => (
          <MovieItem
            item={item}
            key={item.id}
            setModal={setModal}
            setChooseMovie={setChooseMovie}
            setRates={setRates}
            chooseMovie={chooseMovie}
          />
        ))}
    </div>
  );
};

export default MoviesCards;
