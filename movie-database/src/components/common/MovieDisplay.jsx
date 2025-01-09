
import useMovieData from "../../hooks/useMovieData";
import { Link } from "react-router-dom";

const MovieDisplay = (props) => {
  const { movieName } = props;
  const [isLoading, isError, movieData] = useMovieData(movieName);

  if (isLoading) return <p>Please be Patient while we fetch the Data</p>;
  if (isError) return <p>Something went wrong</p>;
  if (!movieData) return <p>No data available for the selected movie.</p>;


  return movieData ? (
    <div /* movie card */
      className="bg-purple-50 p-6 rounded-lg mx-auto mt-8 font-mono flex flex-col items-center justify-center"
    >
     <Link to={`/movie/${movieData.imdbID}`}>

      <img
        className="rounded-lg h-auto shadow-md mb-4"
        src={movieData.Poster}
        alt={movieData.Title || "Movie poster unavailable"}
      />
      <h3 className="text-xl text-purple-600 font-bold hover:text-purple-900 transition-colors">
        {movieData.Title}
      </h3>{" "}
      {/* title */}
      <h4 className="text-lg text-purple-600 font-medium hover:text-purple-900 transition-colors">
        Year: {movieData.Year}
      </h4>{" "}
      {/* year */}
      <h4 className="text-lg text-purple-600 font-medium hover:text-purple-900 transition-colors">
         Rating: {movieData.imdbRating}
      </h4>{" "}
        {/* Rating */}
        </Link>
    </div>
  ) : (
    <p>getting your data</p>
  );
};

export default MovieDisplay;
