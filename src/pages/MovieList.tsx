import Search from "../components/Search.tsx";
import Movies from "../components/Movies.tsx";
import {useMovieStore} from "../store/useMovies.ts";
import {useMovieSearch} from "../hooks/useMovieSearch.ts";
import Pagination from "../components/Pagination.tsx";

const MovieList = () => {
    const [movies, results] = useMovieStore((state) => [state.movies, state.results]);
    const [currentPage, totalPages] = useMovieStore((state) => [state.currentPage, state.totalPages]);
    const { inputRef, isButtonDisabled, loading, handleChange, handlePageChange } = useMovieSearch();

    return (
        <div>
            <h2>Movie Finder</h2>
            <Search inputRef={inputRef} isButtonDisabled={isButtonDisabled} handleChange={handleChange} />
            {loading ? <p>Loading...</p> : <Movies movies={movies} results={results}/>}
            <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
};

export default MovieList;