import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT_BASE } from "../config/tmdconfig";

function useMovieData (movieTitle) {
    
    const movie = movieTitle.toLowerCase().replace (/\s/g, "+") /* replace all whitespace characters in a string with a + symbol. */

    const { isLoading, isError, data } = useQuery ({
        queryKey: ["movies", movie],/* label or a folder name. */
        queryFn: async () => {
           const res = await fetch(`${API_ENDPOINT_BASE} &t=${movie}`)
            const data = await res.json()
            return data 
        }


    });
     return [isLoading, isError, data];
}

      


export default useMovieData;
 