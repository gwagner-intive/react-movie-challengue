import { render, screen } from '@testing-library/react';
import Movies from '../components/Movies';
import {Movie} from "../types/Movie.ts";

describe('Movies component', () => {
    test('renders without crashing', () => {
        render(<Movies movies={[]} results={0} />);
        expect(screen.getByText('Search for a movie.')).toBeInTheDocument();
    });

    test('displays default message when there are no results', () => {
        render(<Movies movies={[]} results={0} />);
        expect(screen.getByText('Search for a movie.')).toBeInTheDocument();
    });

    test('displays default message when there are no found result', () => {
        render(<Movies movies={[]} results={-1} />);
        expect(screen.getByText('No results found.')).toBeInTheDocument();
    });

    test('displays list of movies when there are results', () => {
        const movies: Movie[] = [
            { imdbID: '1', Poster: 'poster1.jpg', Title: 'Movie 1', Year: '2022', Type: 'Movie' },
            { imdbID: '2', Poster: 'poster2.jpg', Title: 'Movie 2', Year: '2021', Type: 'Movie' },
        ];
        render(<Movies movies={movies} results={2} />);
        expect(screen.getByText('Movie 1 (2022)')).toBeInTheDocument();
        expect(screen.getByText('Movie 2 (2021)')).toBeInTheDocument();
    });
});