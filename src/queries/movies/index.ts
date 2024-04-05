import api from "../../services/api.ts";
import {QueryFunctionContext, useQuery} from "@tanstack/react-query";
import {Movie} from "../../types/Movie.ts";
import {environment} from "../../environments/environment.tsx";

type MoviesResponse = {
    Search: Movie[];
    totalResults: string;
    Response: string;
}

async function getMovies(ctx: QueryFunctionContext) {
    const [, search, currentPage] = ctx.queryKey;

    const {data} = await api.get<MoviesResponse>(`/?apikey=${environment.apiKey}&s=${search}&page=${currentPage}`);
    return data;
}

export default function useFetchMovies(search: string, currentPage: number) {
    return useQuery(
        {
            queryKey: ["movies", search, currentPage],
            queryFn: getMovies
        }
    );
}