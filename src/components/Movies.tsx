import './styles/Movies.css';
import {Movie} from "../types/Movie.ts";

type MoviesProps = {
    movies: Movie[];
    results: number;
}
const Movies = ({movies, results}: MoviesProps) => {
    const defaultMessage = results === 0 ? 'Search for a movie.' : 'No results found.';

    return results > 0 ? (
        <ul className="ul-movies">
            {movies.map((movie: Movie) => {
                return (
                    <li key={movie.imdbID}>
                        <img src={movie.Poster} alt={movie.Title}/>
                        <p>{movie.Title} ({movie.Year})</p>
                    </li>
                );
            })}
        </ul>
    ) : (
        <p>{defaultMessage}</p>
    )
};

export default Movies;