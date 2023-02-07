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
  withoutRating?: boolean;
  setChooseMovie: any;
}
export const MovieItem = ({
  item,
  setModal,
  withoutRating,
  setChooseMovie,
}: MovieItemProps) => {
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
              setModal(true);
            }}
          >
            Изменить оценку
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
  setModal?: any;
  setChooseMovie?: any;
  setRates?: any;
  chooseMovie?: IMovie;
  withoutRating?: boolean;
}
const MoviesCards = ({
  withoutRating,
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
            withoutRating={withoutRating}
          />
        ))}
    </div>
  );
};

export default MoviesCards;
