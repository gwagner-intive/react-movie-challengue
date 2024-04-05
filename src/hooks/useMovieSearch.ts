import {useEffect, useRef, useState} from "react";
import {useMovieStore} from "../store/useMovies.ts";
import {useDebounce} from "./useDebounce.ts";
import useFetchMovies from "../queries/movies";

export function useMovieSearch() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const setMovies = useMovieStore((state) => state.setMovies);
    const setResults = useMovieStore((state) => state.setResults);
    const setSearch = useMovieStore((state) => state.setSearch);
    const search = useMovieStore((state) => state.search);

    const currentPage = useMovieStore((state) => state.currentPage);
    const totalPages = useMovieStore((state) => state.totalPages);
    const setTotalPages = useMovieStore((state) => state.setTotalPages);
    const setCurrentPage = useMovieStore((state) => state.setCurrentPage);

    const [loading, setLoading] = useState<boolean>(false);
    const debouncedSearch = useDebounce(search);
    const {data} = useFetchMovies(debouncedSearch, currentPage);

    const handleChange = (): void => {
        const movieTitle: string = inputRef.current?.value || '';
        setLoading(true);
        setCurrentPage(1);

        if (movieTitle.length >= 3) {
            setSearch(movieTitle);
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
            setLoading(false);
            setResults(0);
            setTotalPages(1);
        }
    }
    const handlePageChange = (action: string) => {
        if (currentPage === 1 && action === "previous") return;
        if (currentPage === totalPages && action === "next") return;

        setLoading(true);

        if (action === "next") {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage - 1);
        }
    }

    useEffect(() => {
        if (data?.Search) {
            setMovies(data.Search)
            setLoading(false);
            setResults(parseInt(data.totalResults));
            setTotalPages(Math.ceil(parseInt(data.totalResults) / 10));
        }

        if (data?.Response === "False") {
            setLoading(false);
            setResults(-1);
            setTotalPages(1);
        }
    }, [data]);

    return {
        inputRef,
        isButtonDisabled,
        loading,
        handleChange,
        handlePageChange
    };
}