import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchBooks(params: Record<string, string>) {
    const options = {
        method: "GET",
        url: "https://book-finder1.p.rapidapi.com/api/search",
        params: params,
        headers: {
            "x-rapidapi-key": "107d4ed142msh37aa40990526c2cp15445bjsnf3c530e26dd5",
            "x-rapidapi-host": "book-finder1.p.rapidapi.com",
        },
    };

    const response = await axios.request(options);
    return response.data.results;
}

// Hook React Query untuk mengambil data buku dengan caching otomatis
export function useFetchBooks(params: Record<string, string>) {
    return useQuery({
        queryKey: ["books", params],
        queryFn: () => fetchBooks(params),
        staleTime: 5 * 60 * 1000,
    });
}