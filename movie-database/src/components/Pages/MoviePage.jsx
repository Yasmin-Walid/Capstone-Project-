import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { API_ENDPOINT_BASE } from "../../config/tmdconfig";

/* to display the movie details once clicked on the poster */
const fetchMovieDetails = async (id) => {
  const response = await fetch(`${API_ENDPOINT_BASE}&i=${id}`);
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return response.json();
};

const MoviePage = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
  });

  if (isLoading) {
    return <p className="text-center text-purple-600">Loading movie details</p>;
  }
  if (isError)
    return <p>Error: {isError.message || "failed to load the movie data"}</p>;

  return (
    <div className="min-h-screen bg-purple-200 flex items-center justify-center">
      <div className="p-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-purple-600 mt-5 text-center">
          {data.Title}
        </h1>
        <div className="flex flex-col items-center my-6">
          <img
            className="my-4  max-w-md object-cover rounded-lg"
            src={data.Poster ||"No image available"}
            alt={data.Title}
          />
        </div>

        <h3 className="text-lg text-purple-600 font-bold hover:text-purple-900 transition-colors font-mono">
          Actors:
        </h3>
        {data.Actors}
        <h3 className="text-lg text-purple-600 font-bold hover:text-purple-900 transition-colors font-mono">
          Genre:
        </h3>
              {data.Genre}
              <h3 className="text-lg text-purple-600 font-bold hover:text-purple-900 transition-colors font-mono">Year:</h3> {data.Year}
        <div>
          <p className="text-lg text-purple-600  font-bold hover:text-purple-900 transition-colors font-mono">
            {" "}
            Plot:
          </p>{" "}
          {data.Plot}
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
