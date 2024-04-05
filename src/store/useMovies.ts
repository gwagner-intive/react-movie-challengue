import create from "zustand";
import {Movie} from "../types/Movie.ts";

type MovieStore = {
    movies: Movie[];
    results: number;
    search: string;
    currentPage: number;
    totalPages: number;
    setMovies: (movies: Movie[]) => void;
    setResults: (results: number) => void;
    setSearch: (search: string) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalPages: (totalPages: number) => void;
}

export const useMovieStore = create<MovieStore>((set) => {
    return {
        movies: [],
        results: 0,
        search: '',
        currentPage: 1,
        totalPages: 1,
        setMovies: (movies: Movie[]) => set({movies}),
        setResults: (results: number) => set({results}),
        setSearch: (search: string) => set({search}),
        setCurrentPage: (currentPage: number) => set({currentPage}),
        setTotalPages: (totalPages: number) => set({totalPages})
    }
});