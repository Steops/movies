import { useSelector } from "react-redux";
import MoviesCards from "../components/MoviesCard/MoviesCards";
import { RootState } from "../store/store";

const FavouritePage = () => {
  const movies = useSelector(
    (state: RootState) => state.favouriteMoviesReducer.favouriteMovies
  );

  return (
    <div className="favourite-page">
      <MoviesCards withoutRating cards={movies} />
    </div>
  );
};

export { FavouritePage };
